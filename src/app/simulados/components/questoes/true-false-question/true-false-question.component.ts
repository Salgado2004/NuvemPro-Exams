import { QuestionStructure } from '../question-structure';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css', '../questao.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrueFalseQuestionComponent extends QuestionStructure{
  answers: string[] = [];
  active: boolean = true;
  alert:boolean = true;
  
  /* Calculates the score of the question */
  score(){
    let total=0;
    this.answers.forEach((ans, index) => {
      total += ans == this.correct[index] ? 1 : 0;
    });
    /* Always returns a value between 0 and 1 */
    return total/this.correct.length;
  }

  getAnswers(): string[]{
    return this.answers;
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
}
