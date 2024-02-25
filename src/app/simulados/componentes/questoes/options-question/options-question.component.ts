import { Component, Input } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';

@Component({
  selector: 'app-options-question',
  templateUrl: './options-question.component.html',
  styleUrl: './options-question.component.css'
})
export class OptionsQuestionComponent implements QuestionStructure{
  id: string;
  header: string;
  body: string;
  options: string[];
  correct: string[];
  answer: string;
  classes: { [key: string]: boolean };
  active: boolean = true;

  constructor(){
    this.classes = {};
  }

  verifyAnswer() {
    if(this.answer == this.correct[0]){
      this.classes = {'showAnswer': true, 'correct': true};
    } else{
      this.classes = {'showAnswer': true, 'incorrect': true};
    }
    this.active = false;
  }
}
