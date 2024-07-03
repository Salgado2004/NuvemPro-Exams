import { Component } from '@angular/core';
import { QuestionSummary } from '../../../utils/question-summary';
import { QuestionStructure } from '../../../utils/question-structure';
import { QuestionInterface } from '../../../utils/question-interface';
import { SimuladoEventsService } from '../../../utils/simulado-events.service';

@Component({
  selector: 'app-drag-drop-question',
  templateUrl: './drag-drop-question.component.html',
  styleUrls: ['./drag-drop-question.component.css', '../questao.css']
})
export class DragDropQuestionComponent implements QuestionStructure {
  id: string;
  header: string;
  body: string | null;
  domain: string;
  options: string[];
  correct: string[];
  answers: string[] = [];
  showNext: boolean;
  dataTransfer: string;
  active: boolean = true;
  alert: boolean = true;
  summary: QuestionSummary = new Object() as QuestionSummary;

  /* Builds the question data */
  build(data: QuestionInterface, index: number, next: boolean): void {
    this.id = "question" + index;
    this.header = data.header;
    this.body = data.body;
    this.domain = data.domain;
    this.options = data.options;
    this.correct = data.correct;
    this.showNext = next;
  }

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
      const data = "#" + this.dataTransfer;
      const resource = document.querySelector(data);
      const target = ev.target.getAttribute("aria-label");
      ev.target.appendChild(resource);
      resource.classList.remove("focused");
      this.answers[target] = resource.textContent;
      this.dataTransfer = null;
    }
  }

  /* Check if all the options were answered */
  validate(): boolean {
    return this.answers.length == this.correct.length;
  }

  /* Create the summary of the question */
  getSummary() {
    this.summary.header = this.header;
    this.summary.body = this.body;
    this.summary.domain = this.domain;
    this.summary.correct = this.correct;
    this.summary.answer = this.answers;
    this.summary.score = this.score();
    this.summary.right = this.score() == 1;
    return this.summary;
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

  /* Calculate the score of the question */
  score(): number {
    let score = 0;
    this.correct.forEach((option, index) => {
      if (option == this.answers[index]) score++;
    });
    return score / this.correct.length;
  }

  /* Go to the next question */
  nextQuestion(): void {
    if (this.validate()) {
      SimuladoEventsService.get('nextQuestion').emit(this.getSummary());
    }
  }
}
