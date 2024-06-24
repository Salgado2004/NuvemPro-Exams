import { Component, Input } from '@angular/core';
import { QuestionSummary } from '../../utils/question-summary';

@Component({
  selector: 'app-exam-summary',
  templateUrl: './exam-summary.component.html',
  styleUrl: './exam-summary.component.css'
})
export class ExamSummaryComponent {
  @Input() summary: QuestionSummary[];
  finalScore: number;

  ngOnInit() {
    this.calculateFinalScore();
  }

  calculateFinalScore(){
    this.finalScore = Math.round((this.summary.reduce((acc, summary) => acc + summary.score, 0) / this.summary.length) * 100);
  }
}
