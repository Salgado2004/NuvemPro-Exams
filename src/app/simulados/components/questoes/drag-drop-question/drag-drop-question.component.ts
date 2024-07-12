import { QuestionStructure } from '../question-structure';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-drag-drop-question',
  templateUrl: './drag-drop-question.component.html',
  styleUrls: ['./drag-drop-question.component.css', '../questao.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragDropQuestionComponent extends QuestionStructure {
  answers: string[] = [];
  dataTransfer: string;
  active: boolean = true;
  alert: boolean = true;

  allowDrop(ev: any): void {
    ev.preventDefault();
  }

  /* Set the selected element's id in the data transfer attribute. */
  setData(ev: any): void {
    if (this.active && this.dataTransfer == null) {
      this.dataTransfer = ev.target.id;
      ev.target.classList.add("focused");
    }
  }

  /* Use the data transfer attribute to append the element as a child in the target */
  appendChild(ev: any): void {
    ev.preventDefault();
    if (this.dataTransfer != null) {
      try{
        const data = "#" + this.dataTransfer;
        const resource = document.querySelector(data);
        const target = ev.target.getAttribute("aria-label");
        ev.target.appendChild(resource);
        resource.classList.remove("focused");
        this.answers[target] = resource.textContent;
        this.dataTransfer = null;
      } catch(err){
        /* Avoids DOMException */
      }
    }
  }

  /* Validates if all the options were answered */
  validate(): boolean {
    return this.answers.length == this.correct.length;
  }

  getAnswers(): string[]{
    return this.answers;
  }

  /* Verify if the answers are correct and show in screen */
  verifyAnswer(): void {
    if (this.validate()) {
      this.active = false;
      const resources = document.querySelectorAll(".resource");
      const targets = document.querySelectorAll(".option");
      this.correct.forEach((option, index) => {
        resources[index].classList.add("disabled");
        targets[index].classList.add("showAnswer");
        if (option == this.answers[index]) {
          targets[index].classList.add("correct");
        } else {
          targets[index].classList.add("incorrect");
        }
      });
    }
  }

  /* Calculates the score of the question */
  score(): number {
    let score = 0;
    this.correct.forEach((option, index) => {
      if (option == this.answers[index]) score++;
    });
    return score / this.correct.length;
  }
}
