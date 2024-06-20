import { Component, Input } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';
import { SimuladoEventsService } from '../../../utils/simulado-events.service';

@Component({
  selector: 'app-options-question',
  templateUrl: './options-question.component.html',
  styleUrls: ['./options-question.component.css', '../questao.css']
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
  
  nextQuestion():void{
    SimuladoEventsService.get('nextQuestion').emit();
  }
}
