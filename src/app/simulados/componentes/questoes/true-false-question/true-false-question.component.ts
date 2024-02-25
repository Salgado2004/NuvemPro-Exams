import { Component, Input } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrl: './true-false-question.component.css'
})
export class TrueFalseQuestionComponent implements QuestionStructure{
  id: string;
  header: string;
  body: string;
  options: string[];
  correct: string[];
  answers: string[] = [];
  active: boolean = true;

  verifyAnswer() {
    for (let i = 0; i < this.options.length; i++) {
      if (this.answers[i] == this.correct[i]) {
        document.querySelector(`.opt${i}`).classList.add('correct', 'showAnswer');
      } else{
        document.querySelector(`.opt${i}`).classList.add('incorrect', 'showAnswer');
      }
    }
    this.active = false;
  }
}
