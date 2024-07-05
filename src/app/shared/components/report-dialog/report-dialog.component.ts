import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrl: './report-dialog.component.css'
})
export class ReportDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  copyReference(){
    navigator.clipboard.writeText(this.data);
  }
}
