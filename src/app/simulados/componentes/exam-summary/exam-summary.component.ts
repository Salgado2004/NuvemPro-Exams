import { Component, Input } from '@angular/core';
import { QuestionSummary } from '../../utils/question-summary';
import { Simulado } from '../../utils/simulado';

@Component({
  selector: 'app-exam-summary',
  templateUrl: './exam-summary.component.html',
  styleUrl: './exam-summary.component.css'
})
export class ExamSummaryComponent {
  @Input() summary: QuestionSummary[];
  @Input() exam: Simulado;
  summaryByDomain: any[] = [];
  finalScore: number;

  ngOnInit() {
    this.calculateFinalScore();
    this.exam.domains.forEach((domain) => {
      this.summaryByDomain.push(this.summary.filter((a) => a.domain == domain.name));
    });
  }

  calculateFinalScore(){
    this.finalScore = Math.round((this.summary.reduce((acc, summary) => acc + summary.score, 0) / this.summary.length) * 100);
  }
}
