import { QuestionSummary } from '../../../utils/question-summary';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';
import { QuestionInterface } from '../../../utils/question-interface';
import { SimuladoEventsService } from '../../../utils/simulado-events.service';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css', '../questao.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrueFalseQuestionComponent implements QuestionStructure{
  id: string;
  header: string;
  body: string;
  domain: string;
  options: string[];
  correct: string[];
  answers: string[] = [];
  showNext: boolean;
  active: boolean = true;
  alert:boolean = true;
  summary: QuestionSummary = new Object() as QuestionSummary;

  /* Acts as the constructor of the component, setting the question structure attributes */
  build(data: QuestionInterface, index: number, next: boolean): void {
    this.id = "question"+index;
    this.header = data.header;
    this.body = data.body;
    this.domain = data.domain;
    this.options = data.options;
    this.correct = data.correct;
    this.showNext = next;
  }
  
  /* Calculates the score of the question */
  score(){
    let total=0;
    this.answers.forEach((ans, index) => {
      total += ans == this.correct[index] ? 1 : 0;
    });
    /* Always returns a value between 0 and 1 */
    return total/this.correct.length;
  }

  /* Builds the question summary */
  getSummary(): QuestionSummary{
    this.summary.header = this.header;
    this.summary.body = this.body;
    this.summary.domain = this.domain;
    this.summary.options = this.options;
    this.summary.correct = this.correct;
    this.summary.answer = this.answers;
    this.summary.score = this.score();
    this.summary.right = this.score() == 1;
    return this.summary;
  }

  /* Validates if all the options were answered */
  validate(){
    return this.answers.length == this.correct.length;
  }
  
  /* Verify if the answers are correct and show in screen */
  verifyAnswer() {
    if(this.validate()){
      this.alert = false;
      for (let i = 0; i < this.options.length; i++) {
        if (this.answers[i] == this.correct[i]) {
          document.querySelector(`#${this.answers[i]}${i}`).classList.add('correct', 'showAnswer');
        } else{
          document.querySelector(`#${this.answers[i]}${i}`).classList.add('incorrect', 'showAnswer');
        }
      }
      this.active = false;
    }
  }

  /* Go to the next question */
  nextQuestion():void{
    if(this.validate()){
      this.alert = false;
      SimuladoEventsService.get('nextQuestion').emit(this.getSummary());
    }
  }
}
