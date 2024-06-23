import { Component, Input } from '@angular/core';
import { Simulado } from '../../utils/simulado';

@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrl: './exam-card.component.css'
})
export class ExamCardComponent {
  @Input() exam: Simulado;
  questions: number;

  ngOnInit(){
    this.questions = this.exam.numeroQuestoes; 
  }

  validateQuestions() {
    if (this.questions < 0){
      this.questions = 1;
    } else if (this.questions > this.exam.numeroQuestoes){
      this.questions = this.exam.numeroQuestoes;
    }
  }

}
