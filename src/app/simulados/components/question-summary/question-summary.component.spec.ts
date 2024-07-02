import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSummaryComponent } from './question-summary.component';

describe('QuestionSummaryComponent', () => {
  let component: QuestionSummaryComponent;
  let fixture: ComponentFixture<QuestionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
