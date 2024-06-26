import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainSummaryComponent } from './domain-summary.component';

describe('DomainSummaryComponent', () => {
  let component: DomainSummaryComponent;
  let fixture: ComponentFixture<DomainSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
