import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
  exam: string;
  questions: string;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.exam = this.activatedRoute.snapshot.paramMap.get("exam");
  }
}
