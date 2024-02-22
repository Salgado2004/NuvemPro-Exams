import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsContainerComponent } from '../../componentes/questions-container/questions-container.component';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
  exam: string;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.exam = this.activatedRoute.snapshot.paramMap.get("exam");
  }
}
