import { lastValueFrom } from 'rxjs';
import { Simulado } from '../model/simulado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryExamsService {
  private simulados: Simulado[];
  private pathname = environment.endpoint + 'exams.json';

  constructor(private httpClient: HttpClient ) { }

  private loadExamFile() {
    return this.httpClient.get(this.pathname);
  }

  async getAvailableExams(){
    try{
      const data: any = await lastValueFrom(this.loadExamFile());
      this.simulados = data;
      return this.simulados;
    }catch(error){
      console.error("Erro ao carregar os exames:", error);
    }
  }

  async getExam(examName:string){
    try{
      const data: any = await lastValueFrom(this.loadExamFile());
      this.simulados = data;
      for (const exam of this.simulados) {
        if (exam.name == examName) {
            return exam;
        }
      }
      return null;
    }catch(error){
      console.error("Erro ao carregar os exames:", error);
    }
  }
}
