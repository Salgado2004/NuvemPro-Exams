import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OctokitService } from '../../utils/octokit.service';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrl: './report-dialog.component.css'
})
export class ReportDialogComponent {
  formGroup: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private octokit: OctokitService) {
    this.formGroup = new FormGroup({
      reason: new FormControl('', [Validators.required]),
      explain: new FormControl('', [Validators.required])
    });
  }

  get reason() {
    return this.formGroup.get("reason");
  }

  get explain() {
    return this.formGroup.get("explain");
  }

  sendReport() {
    if (this.formGroup.valid) {
      const payload = {
        reference: this.data,
        reason: this.reason.value,
        explain: this.explain.value
      };

      this.octokit.createEventDispatch("question_report", payload);
    }
  }

}
