import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleQuestionComponent } from './multiple-question.component';

describe('MultipleQuestionComponent', () => {
  let component: MultipleQuestionComponent;
  let fixture: ComponentFixture<MultipleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
