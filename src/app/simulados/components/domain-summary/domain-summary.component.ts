import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-domain-summary',
  templateUrl: './domain-summary.component.html',
  styleUrl: './domain-summary.component.css'
})
export class DomainSummaryComponent implements OnChanges {
  @Input() domain: string;
  @Input() percentual: number;
  progress: string;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.progress = this.percentual+'%';
  }
}
