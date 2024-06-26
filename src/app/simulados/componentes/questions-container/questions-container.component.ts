import { Component, Input, ViewChild } from '@angular/core';
import { QueryQuestionsService } from '../../utils/query-questions.service';
import { SimuladoEventsService } from '../../utils/simulado-events.service';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { Simulado } from '../../utils/simulado';
import { QuestionInterface } from '../../utils/question-interface';
import { QuestionSummary } from '../../utils/question-summary';

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
  current = 0;
  finish:boolean = false;

  constructor(private query: QueryQuestionsService) { }
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
      this.finish = true;
    });
  }

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

  private getQuestion(){
    this.questionData = this.questions[this.current];
    this.questionCard.questionIndex = this.current+1;
    this.questionCard.setQuestionData(this.questionData);
  }

}
