import { Component } from '@angular/core';

@Component({
  selector: 'app-summary-onboarding',
  templateUrl: './summary-onboarding.component.html',
  styles: '.star { color: #f5c319; }'
})
export class SummaryOnboardingComponent {

  onboarding() {
    window.localStorage.setItem("summary-onboarding", "done");
  }
}
