import { Component, Input } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';
import { SimuladoEventsService } from '../../../utils/simulado-events.service';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css', '../questao.css']
})
export class TrueFalseQuestionComponent implements QuestionStructure{
  id: string;
  header: string;
  body: string;
  options: string[];
  correct: string[];
  answers: string[] = [];
  showNext: boolean;
  active: boolean = true;

  verifyAnswer() {
    for (let i = 0; i < this.options.length; i++) {
      if (this.answers[i] == this.correct[i]) {
        document.querySelectorAll(`.${this.id}opt${i}`).forEach(element => {
          element.classList.add('correct', 'showAnswer');
        });
      } else{
        document.querySelectorAll(`.${this.id}opt${i}`).forEach(element => {
          element.classList.add('incorrect', 'showAnswer');
        });
      }
    }
    this.active = false;
  }

  score(){
    let total=0;
    this.answers.forEach((ans, index) => {
      total += ans == this.correct[index] ? 1 : 0;
    });
    return total/this.correct.length;
  }

  nextQuestion():void{
    SimuladoEventsService.get('nextQuestion').emit(this.score());
  }
}
