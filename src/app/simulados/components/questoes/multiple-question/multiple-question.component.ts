import { FormControl, FormGroup } from '@angular/forms';
import { QuestionSummary } from '../../../utils/question-summary';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';
import { QuestionInterface } from '../../../utils/question-interface';
import { SimuladoEventsService } from '../../../utils/simulado-events.service';

@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrls: ['./multiple-question.component.css', '../questao.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleQuestionComponent implements QuestionStructure {
  id: string;
  header: string;
  body: string;
  domain: string;
  options: string[];
  correct: string[];
  answers: FormGroup;
  showNext: boolean;
  active: boolean = true;
  alert:boolean = true;
  summary: QuestionSummary = new Object() as QuestionSummary;

  /* Initializes the formGroup */
  ngOnInit(){
    this.answers = new FormGroup({});
    this.options.forEach((opt, index) => {
      this.answers.addControl('answer'+index, new FormControl({value: false, disabled: !this.active}));
    });

    this.answers.valueChanges.subscribe(() => {
      this.validate();
    });
  }

  /* Acts as the constructor of the component, setting the question structure attributes */
  build(data: QuestionInterface, index: number, next: boolean): void {
    this.id = "question"+index;
    this.header = data.header;
    this.body = data.body;
    this.domain = data.domain;
    this.options = data.options;
    this.correct = data.correct;
    this.showNext = next;
  }

  /* Iterates the answers formGroup and create a string array with the checked options */
  getAnswers(){
    const answers = [];
    this.options.forEach((opt, index) => {
      answers.push(this.answers.get('answer'+index)?.value);
      this.answers.get('answer'+index)?.disable();
    });
    return answers;
  }
  
  /* Calculates the score of the question */
  score(){
    let total=0;
    this.options.forEach((opt, index) => {
      if(this.getAnswers()[index]){
        total += this.correct.includes(opt) ? 1 : 0;
      } else{
        total += !this.correct.includes(opt) ? 1 : 0;
      }
    });
    return total/this.options.length;
  }
  
  /* Builds the question summary */
  getSummary(): QuestionSummary{
    this.summary.header = this.header;
    this.summary.body = this.body;
    this.summary.domain = this.domain;
    this.summary.correct = this.correct;
    this.summary.answer = this.options.filter((opt, index) => this.getAnswers()[index]);
    this.summary.score = this.score();
    this.summary.right = this.score() == 1;
    return this.summary;
  }

  /* Validates if all the options were answered */
  validate(){
    this.options.forEach((opt, index) => {
      if(this.answers.get('answer'+index)?.value){
        this.alert = false;
      }
    });
  }
  
  /* Verify if the answers are correct and show in screen */
  verifyAnswer() {
    for (let i = 0; i < this.options.length; i++){
      if(this.getAnswers()[i]){
        if(this.correct.includes(this.options[i])){
          document.querySelector(`#checkbox${i}`).classList.add('correct', 'showAnswer');
        } else{
          document.querySelector(`#checkbox${i}`).classList.add('incorrect', 'showAnswer');
        }
      }
    }
    this.active = false;
  }
  
  /* Go to the next question */
  nextQuestion():void{
    SimuladoEventsService.get('nextQuestion').emit(this.getSummary());
  }
}
