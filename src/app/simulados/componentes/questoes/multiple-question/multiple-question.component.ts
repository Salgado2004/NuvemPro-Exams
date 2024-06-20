import { Component, Input } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';
import { SimuladoEventsService } from '../../../utils/simulado-events.service';

@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrls: ['./multiple-question.component.css', '../questao.css']
})
export class MultipleQuestionComponent implements QuestionStructure {
  id: string;
  header: string;
  body: string;
  options: string[];
  correct: string[];
  answers: string[] = [];
  showNext: boolean;
  active: boolean = true;

  verifyAnswer() {
    for (let i = 0; i < this.options.length; i++){
      if(this.answers[i]){
        if(this.correct.includes(this.options[i])){
          document.querySelector(`#label${i}${this.id}`).classList.add('correct', 'showAnswer');
        } else{
          document.querySelector(`#label${i}${this.id}`).classList.add('incorrect', 'showAnswer');
        }
      }
    }
    this.active = false;
  }

  score(){
    let total=0;
    this.answers.forEach((ans, index) => {
      if(ans){
        total += this.correct.includes(this.options[index]) ? 1 : 0;
      }
    });
    return total/this.correct.length;
  }
  
  nextQuestion():void{
    SimuladoEventsService.get('nextQuestion').emit(this.score());
  }
}