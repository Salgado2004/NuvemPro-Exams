import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryExamsService } from '../../utils/query-exams.service';
import { Simulado } from '../../utils/simulado';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
  examName: string;
  exam: Simulado;
  questions: string;

  constructor(private activatedRoute : ActivatedRoute, private query: QueryExamsService) { }

  ngOnInit() {
    this.examName = this.activatedRoute.snapshot.paramMap.get("exam");
    this.query.getExam(this.examName).then((data:Simulado) => {
      this.exam = data;
    });
  }
}
