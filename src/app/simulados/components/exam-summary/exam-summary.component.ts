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
  generalScore: number;
  summaryByDomain: any[] = [];
  scoreByDomain: number[]=[];

  ngOnInit() {
    this.calculateFinalScore();
    this.exam.domains.forEach((domain, index) => {
      this.summaryByDomain.push(this.summary.filter((a) => a.domain == domain.name));
      this.scoreByDomain.push(this.summaryByDomain[index].reduce((total, domain) => total + (domain.right ? 1 : 0), 0));
    });
  }

  calculateFinalScore(){
    this.generalScore = Math.round((this.summary.reduce((total, summary) => total + summary.score, 0) / this.summary.length) * 100);
  }

  percentual(index: number){
    const domain = this.summaryByDomain[index];
    let percentual = Math.round((domain.reduce((total, summary) => total + summary.score, 0) / domain.length) * 100);
    return !Number.isNaN(percentual) ? percentual : 0;
  }
}
