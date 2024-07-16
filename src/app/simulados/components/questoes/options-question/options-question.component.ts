import { QuestionStructure } from '../question-structure';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-options-question',
  templateUrl: './options-question.component.html',
  styleUrls: ['./options-question.component.css', '../questao.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsQuestionComponent extends QuestionStructure{
  answer: number;
  active: boolean = true;
  alert:boolean = true;
  
  /* Calculates the score of the question */
  score(){
    return this.data.options[this.answer] == this.data.correct[0] ? 1 : 0;
  }

  getAnswers(): string{
    return this.data.options[this.answer];
  }

  /* Validates if all the options were answered */
  validate(){
    return document.querySelector('input[type="radio"]:checked') != null;
  }
  
  /* Verify if the answers are correct and show in screen */
  verifyAnswer() {
    if(this.validate()){
      this.alert = false;
      let input = document.querySelector(`#radio${this.answer}`);
      input.classList.add('showAnswer');
      if(this.data.options[this.answer] == this.data.correct[0]){
        input.classList.add('correct');
      } else{
        input.classList.add('incorrect');
      }
      this.active = false;
    }
  }
}
