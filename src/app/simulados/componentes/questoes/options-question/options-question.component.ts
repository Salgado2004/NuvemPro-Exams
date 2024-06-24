import { Component, Input } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';
import { SimuladoEventsService } from '../../../utils/simulado-events.service';
import { QuestionSummary } from '../../../utils/question-summary';

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
  showNext: boolean;
  classes: { [key: string]: boolean };
  active: boolean = true;
  summary: QuestionSummary = new Object() as QuestionSummary;

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

  score(){
    return this.answer == this.correct[0] ? 1 : 0;
  }

  getSummary(){
    this.summary.header = this.header;
    this.summary.body = this.body;
    this.summary.correct = this.correct;
    this.summary.answer = this.answer;
    this.summary.score = this.score();
    this.summary.right = this.score() == 1;
    return this.summary;
  }
  
  nextQuestion():void{
    SimuladoEventsService.get('nextQuestion').emit(this.getSummary());
  }
}
