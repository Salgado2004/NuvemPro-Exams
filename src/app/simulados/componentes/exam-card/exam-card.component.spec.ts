import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCardComponent } from './exam-card.component';

describe('ExamCardComponent', () => {
  let component: ExamCardComponent;
  let fixture: ComponentFixture<ExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
