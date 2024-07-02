import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-domain-summary',
  templateUrl: './domain-summary.component.html',
  styleUrl: './domain-summary.component.css'
})
export class DomainSummaryComponent {
  @Input() domain: string;
  @Input() percentual: number;

  getProgress(){
    return this.percentual+'%';
  }
}
