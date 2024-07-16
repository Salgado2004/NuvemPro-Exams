import { FormControl, FormGroup } from '@angular/forms';
import { QuestionStructure } from '../question-structure';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrls: ['./multiple-question.component.css', '../questao.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleQuestionComponent extends QuestionStructure {
  answers: FormGroup;
  active: boolean = true;
  alert: boolean = true;

  /* Initializes the formGroup */
  ngOnInit() {
    this.answers = new FormGroup({});
    this.data.options.forEach((opt, index) => {
      this.answers.addControl('answer' + index, new FormControl({ value: false, disabled: !this.active }));
    });
  }

  /* Iterates the answers formGroup and create a string array with the checked options */
  getAnswers(): string[]{
    const answers = [];
    this.data.options.forEach((opt, index) => {
      answers.push(this.answers.get('answer' + index)?.value);
      this.answers.get('answer' + index)?.disable();
    });
    return this.data.options.filter((opt, index) => answers[index]);;
  }

  /* Calculates the score of the question */
  score() {
    let total = 0;
    this.data.options.forEach((opt, index) => {
      if (this.answers.get('answer' + index)?.value) {
        total += this.data.correct.includes(opt) ? 1 : 0;
      } else {
        total += !this.data.correct.includes(opt) ? 1 : 0;
      }
    });
    return total / this.data.options.length;
  }

  /* Validates if all the options were answered */
  validate(): boolean {
    for(let i = 0; i < this.data.options.length; i++) {
      if (this.answers.get('answer' + i)?.value) {
        return true;
      }
    }
    return false;
  }

  /* Verify if the answers are correct and show in screen */
  verifyAnswer() {
    if (this.validate()) {
      this.alert = false;
      for (let i = 0; i < this.data.options.length; i++) {
        if (this.answers.get('answer' + i)?.value) {
          if (this.data.correct.includes(this.data.options[i])) {
            document.querySelector(`#checkbox${i}`).classList.add('correct', 'showAnswer');
          } else {
            document.querySelector(`#checkbox${i}`).classList.add('incorrect', 'showAnswer');
          }
        }
      }
      this.active = false;
    }
  }
}
