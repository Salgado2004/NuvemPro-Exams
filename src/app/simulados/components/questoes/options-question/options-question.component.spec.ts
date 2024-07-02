import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsQuestionComponent } from './options-question.component';

describe('OptionsQuestionComponent', () => {
  let component: OptionsQuestionComponent;
  let fixture: ComponentFixture<OptionsQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
