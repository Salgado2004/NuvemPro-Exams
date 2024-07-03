import { Component } from '@angular/core';
import { Simulado } from '../../utils/simulado';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryExamsService } from '../../utils/query-exams.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
  examName: string;
  exam: Simulado;
  questionNumber: number;

  constructor(private activatedRoute: ActivatedRoute, private query: QueryExamsService, private router: Router) { }

  ngOnInit() {
    /* Query the exam by the URL */
    this.examName = this.activatedRoute.snapshot.paramMap.get("exam");
    this.questionNumber = Number.parseInt(this.activatedRoute.snapshot.paramMap.get("questions"));
    this.query.getExam(this.examName).then((data: Simulado) => {
      /* Check if the exam exists */
      if (data != null) {
        /* Load the exam questions */
        this.exam = data;
        if (this.questionNumber > this.exam.questions) {
          this.questionNumber = this.exam.questions;
        }
        if (this.questionNumber < 1) {
          this.questionNumber = 1;
        }
      } else{
        /* Redirect to error page */
        this.router.navigate(['not-found']);
      }
    });
  }
}
