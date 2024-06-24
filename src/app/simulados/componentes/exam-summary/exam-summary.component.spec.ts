import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSummaryComponent } from './exam-summary.component';

describe('ExamSummaryComponent', () => {
  let component: ExamSummaryComponent;
  let fixture: ComponentFixture<ExamSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
