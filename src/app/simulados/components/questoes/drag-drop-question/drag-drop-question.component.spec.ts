import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropQuestionComponent } from './drag-drop-question.component';

describe('DragDropQuestionComponent', () => {
  let component: DragDropQuestionComponent;
  let fixture: ComponentFixture<DragDropQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragDropQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
