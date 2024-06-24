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
  questions: number[];
  summary: QuestionSummary[] = [];
  questionData: QuestionInterface;
  current = 0;
  finish:boolean = false;

  constructor(private query: QueryQuestionsService) { }
  ngOnInit() {
    this.generateQuestions();
    this.loadQuestion().then((data:QuestionInterface) => {
      this.loading = false;
      this.questionData = data;
      this.questionCard.setQuestionData(this.questionData);
    });

      SimuladoEventsService.get('nextQuestion').subscribe( (summary:QuestionSummary) => {
        this.loading = true;
        this.summary.push(summary);
        this.current += 1;
        if(this.current < this.questions.length){
          this.loadQuestion().then((data:QuestionInterface) => {
            this.loading = false;
            this.questionData = data;
            this.questionCard.setQuestionData(this.questionData);
          });
        }
      });

      SimuladoEventsService.get('endExam').subscribe( (summary:QuestionSummary) => {
        this.summary.push(summary);
        this.finish = true;
      });
  }

  generateQuestions(){
    this.questions = [];
    while(this.questions.length < this.questionNumber){
      let q = Math.floor(Math.random() * this.exam.numeroQuestoes) + 1;
      if(this.questions.indexOf(q) === -1) this.questions.push(q);
    }
  }

  async loadQuestion(){
    try{
      let question = await this.query.getQuestion(this.exam.name, this.questions[this.current].toString());
      return question;
    } catch(error){
      console.error("Erro ao carregar a questão:", error);
    }
  }

}
