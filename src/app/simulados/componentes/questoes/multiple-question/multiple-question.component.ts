import { Component } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';
import { SimuladoEventsService } from '../../../utils/simulado-events.service';
import { QuestionSummary } from '../../../utils/question-summary';
import { QuestionInterface } from '../../../utils/question-interface';

@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrls: ['./multiple-question.component.css', '../questao.css']
})
export class MultipleQuestionComponent implements QuestionStructure {
  id: string;
  header: string;
  body: string;
  domain: string;
  options: string[];
  correct: string[];
  answers: string[] = [];
  showNext: boolean;
  active: boolean = true;
  summary: QuestionSummary = new Object() as QuestionSummary;

  build(data: QuestionInterface, index: number, next: boolean): void {
    this.id = "question"+index;
    this.header = data.header;
    this.body = data.body;
    this.domain = data.domain;
    this.options = data.options;
    this.correct = data.correct;
    this.showNext = next;
  }

  verifyAnswer() {
    for (let i = 0; i < this.options.length; i++){
      if(this.answers[i]){
        if(this.correct.includes(this.options[i])){
          document.querySelector(`#label${i}${this.id}`).classList.add('correct', 'showAnswer');
        } else{
          document.querySelector(`#label${i}${this.id}`).classList.add('incorrect', 'showAnswer');
        }
      }
    }
    this.active = false;
  }

  score(){
    let total=0;
    this.options.forEach((opt, index) => {
      if(this.answers[index]){
        total += this.correct.includes(opt) ? 1 : 0;
      } else{
        total += !this.correct.includes(opt) ? 1 : 0;
      }
    });
    return total/this.options.length;
  }

  getSummary(){
    this.summary.header = this.header;
    this.summary.body = this.body;
    this.summary.domain = this.domain;
    this.summary.correct = this.correct;
    this.summary.answer = this.options.filter((opt, index) => this.answers[index]);
    this.summary.score = this.score();
    this.summary.right = this.score() == 1;
    return this.summary;
  }
  
  nextQuestion():void{
    SimuladoEventsService.get('nextQuestion').emit(this.getSummary());
  }
}
