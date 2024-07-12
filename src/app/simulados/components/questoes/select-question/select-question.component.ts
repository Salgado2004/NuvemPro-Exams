import { QuestionStructure } from '../question-structure';
import { Component, ChangeDetectionStrategy} from '@angular/core';
import { QuestionSummary } from '../../../utils/question-summary';

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.css', '../questao.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectQuestionComponent extends QuestionStructure{
  answer: string;
  active: boolean = true;
  alert: boolean = true;
  summary: QuestionSummary = new Object() as QuestionSummary;
  
  /* Calculates the score of the question */
  score(){
    return this.answer == this.correct[0] ? 1 : 0;
  }
  
  /* Builds the question summary */
  getSummary(): QuestionSummary{
    this.summary.header = this.header;
    this.summary.body = this.body;
    this.summary.domain = this.domain;
    this.summary.correct = this.correct;
    this.summary.answer = this.answer;
    this.summary.score = this.score();
    this.summary.right = this.score() == 1;
    return this.summary;
  }

  /* Validates if all the options were answered */
  validate(){
    return this.answer != undefined;
  }

  /* Verify if the answers are correct and show in screen */
  verifyAnswer() {
    if(this.validate()){
      this.alert = false;
      if(this.answer == this.correct[0]){
        document.querySelector(".option div").setAttribute('style', 'border: 2px solid #21c177');
      } else{
        document.querySelector(".option div").setAttribute('style', 'border: 2px solid #e35b59;');
      }
      this.active = false;
    }
  }
}