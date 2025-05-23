import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Simulado } from '../../utils/model/simulado';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamHistory, ExamSummary } from '../../utils/model/history';
import { SummaryOnboardingComponent } from '../../components/summary-onboarding/summary-onboarding.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  history: Map<string, ExamHistory>;
  summary: ExamSummary;
  exam: Simulado;
  attempt: number;
  onboarding: boolean;
  totalAttempts: number;
  generalScore: number;
  summaryByDomain: any[] = [];
  scoreByDomain: number[] = [];
  readonly dialog = inject(MatDialog);
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.onboarding = window.localStorage.getItem("summary-onboarding") !== null;
    this.history = JSON.parse(window.localStorage.getItem("examHistory"));
    if (Object.keys(this.history).length === 0) {
      this.router.navigate(['/simulados']);
    }
    this.history = new Map(this.history);
    
    let examName = this.activatedRoute.snapshot.paramMap.get("exam");
    
    if (this.history.get(examName) === undefined) {
      this.router.navigate(['/simulados']);
    }
    
    this.attempt = 0;
    this.totalAttempts = this.history.get(examName).attempts.length;
    this.exam = this.history.get(examName).attempts[this.attempt].exam;
  }
  
  ngOnInit() {
    this.loadSummary();
    if (!this.onboarding){
      this.dialog.open(SummaryOnboardingComponent);
    }
  }
  
  loadSummary(): void {
    this.summary = this.history.get(this.exam.name).attempts[this.attempt];
    this.summaryByDomain = [];
    this.scoreByDomain = [];
    
    this.calculateFinalScore();
    this.exam.domains.forEach((domain, index) => {
      this.summaryByDomain.push(this.summary.summary.filter((a) => a.domain == domain.name));
      this.scoreByDomain.push(this.summaryByDomain[index].reduce((total, domain) => total + (domain.right ? 1 : 0), 0));
    });
  }

  handleSummaryChange(e: PageEvent) {
      this.attempt = e.pageIndex;
      this.loadSummary();
  }
  
  calculateFinalScore() {
    this.generalScore = Math.round((this.summary.summary.reduce((total, summary) => total + summary.score, 0) / this.summary.summary.length) * 100);
  }
  
  percentual(index: number) {
    const domain = this.summaryByDomain[index];
    let percentual = Math.round((domain.reduce((total, summary) => total + summary.score, 0) / domain.length) * 100);
    return !Number.isNaN(percentual) ? percentual : 0;
  }
}
