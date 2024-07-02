import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsContainerComponent } from './questions-container.component';

describe('QuestionsContainerComponent', () => {
  let component: QuestionsContainerComponent;
  let fixture: ComponentFixture<QuestionsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
