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
      while(this.questions.length < this.questionNumber){
        let q = Math.floor(Math.random() * this.exam.numeroQuestoes);
        if(!this.questions.includes(data[q])){
          this.questions.push(data[q]);
        }
      }
    } catch(error){
      console.error("Erro ao carregar as questões: ", error);
    }
  }

  getQuestion(){
    this.questionData = this.questions[this.current];
    this.questionCard.questionIndex = this.current+1;
    this.questionCard.setQuestionData(this.questionData);
  }

}
