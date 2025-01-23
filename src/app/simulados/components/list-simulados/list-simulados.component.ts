import { Component } from '@angular/core';
import { Simulado } from '../../utils/model/simulado';
import { QueryExamsService } from '../../utils/service/query-exams.service';

@Component({
  selector: 'app-list-simulados',
  templateUrl: './list-simulados.component.html',
  styleUrl: './list-simulados.component.css'
})
export class ListSimuladosComponent {
  private filterSimulado = ["provider"];
  public simulados: Simulado[];
  public activeList: Simulado[];
  public activeFilters: { name: string, value: string }[] = [];
  public filters: Map<string, any[]> = new Map();
  loading: boolean = true;

  constructor(private query: QueryExamsService) { }

  ngOnInit() {
    this.query.getAvailableExams().then((data: Simulado[]) => {
      this.loading = false;
      this.simulados = data;
      this.activeList = this.simulados;
      for (let filter of this.filterSimulado) {
        let key = filter as string;
        let values = Array.from(new Set(this.simulados.map(value => value[key])));
        this.filters.set(key, values);
      }
    });
  }

  applyFilter(event: Event) {
    let target = event.target as HTMLFormElement;

    let existingFilter = this.activeFilters.findIndex((f) => f.name === target.title);
    if (existingFilter !== -1) {
      if (!target.value || target.value === 'Todos' || target.value === '') {
        this.activeFilters.splice(existingFilter, 1);
      } else {
        this.activeFilters[existingFilter].value = target.value;
      }
    } else {
      if (target.value && target.value !== 'Todos' && target.value !== '') {
        this.activeFilters.push({ name: target.title, value: target.value });
      }
    }


    this.activeList = this.simulados.filter((item) => {
      return this.activeFilters.every(
        (f) => item[f.name] === f.value
      );
    });
  }
}
