import { QuestionStructure } from '../question-structure';
import { QuestionSummary } from '../../../utils/question-summary';
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
  summary: QuestionSummary = new Object() as QuestionSummary;
  
  /* Calculates the score of the question */
  score(){
    return this.options[this.answer] == this.correct[0] ? 1 : 0;
  }
  
  /* Builds the question summary */
  getSummary(): QuestionSummary{
    this.summary.header = this.header;
    this.summary.body = this.body;
    this.summary.domain = this.domain;
    this.summary.correct = this.correct;
    this.summary.answer = this.options[this.answer];
    this.summary.score = this.score();
    this.summary.right = this.score() == 1;
    return this.summary;
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
      if(this.options[this.answer] == this.correct[0]){
        input.classList.add('correct');
      } else{
        input.classList.add('incorrect');
      }
      this.active = false;
    }
  }
}
