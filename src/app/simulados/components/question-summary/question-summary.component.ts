import { Component, Input } from '@angular/core';
import { QuestionSummary } from '../../utils/model/question-summary';

@Component({
  selector: 'app-question-summary',
  templateUrl: './question-summary.component.html',
  styleUrl: './question-summary.component.css'
})
export class QuestionSummaryComponent {
  @Input() summary: QuestionSummary;
  classes: { [key: string]: boolean } = {};

  ngOnInit(){
    if (this.summary.right){
      this.classes = {'correct': true};
    } else {
      this.classes = {'incorrect': true};
    }
  }
}
