import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryOnboardingComponent } from './summary-onboarding.component';

describe('SummaryOnboardingComponent', () => {
  let component: SummaryOnboardingComponent;
  let fixture: ComponentFixture<SummaryOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryOnboardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
