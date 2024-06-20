import { Component } from '@angular/core';
import { QueryExamsService } from '../../utils/query-exams.service';

@Component({
  selector: 'app-list-simulados',
  templateUrl: './list-simulados.component.html',
  styleUrl: './list-simulados.component.css'
})
export class ListSimuladosComponent {
  simulados:any;

  constructor(private query: QueryExamsService) { }

  ngOnInit() {
    this.query.getAvailableExams()
      .subscribe((data: any) => {
        this.simulados = data;
      });
  }
}
