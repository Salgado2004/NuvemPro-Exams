import { Component } from '@angular/core';
import { QueryExamsService } from '../../utils/query-exams.service';
import { Simulado } from '../../utils/simulado';

@Component({
  selector: 'app-list-simulados',
  templateUrl: './list-simulados.component.html',
  styleUrl: './list-simulados.component.css'
})
export class ListSimuladosComponent {
  public simulados: Simulado[];
  loading: boolean = true;

  constructor(private query: QueryExamsService) { }

  ngOnInit() {
    this.query.getAvailableExams().then((data:Simulado[]) => {
      this.loading = false;
      this.simulados = data;
      console.log(this.simulados);
    });
  }
}
