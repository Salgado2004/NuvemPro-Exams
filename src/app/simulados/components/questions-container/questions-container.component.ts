import { Router } from '@angular/router';
import { Simulado } from '../../utils/model/simulado';
import { ExamHistory } from '../../utils/model/history';
import { Component, Input, ViewChild } from '@angular/core';
import { QuestionSummary } from '../../utils/model/question-summary';
import { QuestionInterface } from '../../utils/model/question-interface';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { SimuladoEventsService } from '../../utils/service/simulado-events.service';
import { QueryQuestionsService } from '../../utils/service/query-questions.service';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css']
})
export class QuestionsContainerComponent {
  @ViewChild(QuestionCardComponent) questionCard: QuestionCardComponent;
  @Input() exam: Simulado;
  @Input() questionNumber: number;
  loading:boolean = true;
  questions: QuestionInterface[];
  summary: QuestionSummary[] = [];
  questionData: QuestionInterface;
  history: Map<String, ExamHistory>;
  current = 0;

  constructor(private query: QueryQuestionsService, private router: Router) {}

  ngOnInit() {
    this.generateQuestions().then(() => {
      this.loading = false;
      this.getQuestion();
    });
    
    SimuladoEventsService.get('nextQuestion').subscribe( (summary:QuestionSummary) => {
      this.summary.push(summary);
      this.current += 1;
      this.getQuestion();
    });
    
    SimuladoEventsService.get('endExam').subscribe( (summary:QuestionSummary) => {
      this.summary.push(summary);
      
      const date = new Date();
      if (window.localStorage.getItem("examHistory") === null){
        this.history = new Map();
        
        let examHistory  = { attempts: [] };
        examHistory.attempts.unshift({exam: this.exam, summary: this.summary, date: date.toLocaleString()});
        
        this.history.set(this.exam.name, examHistory);
        window.localStorage.setItem("examHistory", JSON.stringify(Array.from(this.history.entries())));
        
      } else {
        this.history = new Map(JSON.parse(window.localStorage.getItem("examHistory")));
        let examHistory = this.history.get(this.exam.name);
        if (examHistory === undefined){
          examHistory = { attempts: [] };
        }
        examHistory.attempts.unshift({exam: this.exam, summary: this.summary, date: date.toLocaleString()});
        if (examHistory.attempts.length > 5) {
          examHistory.attempts.pop();
        }

        this.history.set(this.exam.name, examHistory);
        window.localStorage.setItem("examHistory", JSON.stringify(Array.from(this.history.entries())));
      }

      this.router.navigate([`/simulados/summary/${this.exam.name}`]);
    });
  }

  /* Method to query the exam questions from the JSON data and sort them by domain */
  async generateQuestions(){
    this.questions = [];
    try{
      let data = await this.query.getQuestions(this.exam.name);
      const questionsByDomain = this.questionsByDomain(data);
      this.questions = questionsByDomain.flat().sort(() => Math.random() - Math.random());
    } catch(error){
      console.error("Erro ao carregar as questões: ", error);
    }
  }

  /* Specialized method to sort questions by domain, considering each domains weight in the exam */
  questionsByDomain(questions: QuestionInterface[]){
    const questionsByDomain = [];
    const domainWeights = [];
    this.exam.domains.forEach((domain, index) => {
      let weight = Math.round((Math.floor(Math.random() * (domain.max - domain.min + 1)) + domain.min) * this.questionNumber/100);
      questionsByDomain.push(questions.filter((a) => a.domain == domain.name));
      domainWeights.push(this.getDomainWeight(weight, questionsByDomain[index].length));
    });
    while(domainWeights.reduce((total, domain) => total + domain.value, 0) < this.questionNumber){
      let i = Math.floor(Math.random() * domainWeights.length);
      i = Math.min(i, domainWeights.length - 1);
      domainWeights[i] = this.getDomainWeight(domainWeights[i].value+1, questionsByDomain[i].length);
    }
    for(let i = 0; i < questionsByDomain.length; i++){
      questionsByDomain[i] = questionsByDomain[i].sort(() => Math.random() - Math.random()).slice(0, domainWeights[i].value);
    }
    return questionsByDomain;
  }

  getDomainWeight(value: number, max: number){
    if (value > max){
      value = max;
      return {"value":value, "max": true};
    } else{
      return {"value":value, "max": false};
    }
  }

  /* Method used to change for the next question */
  private getQuestion(){
    this.questionData = this.questions[this.current];
    this.questionCard.questionIndex = this.current+1;
    this.questionCard.setQuestionData(this.questionData);
  }

}
