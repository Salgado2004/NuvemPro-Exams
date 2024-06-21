import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Simulado } from './simulado';

@Injectable({
  providedIn: 'root'
})
export class QueryExamsService {
  private pathname = 'assets/exams.json';
  private simulados: Simulado[];

  constructor(private httpClient: HttpClient ) { }

  private loadExamFile() {
    return this.httpClient.get(this.pathname);
  }

  async getAvailableExams(){
    try{
      const data: any = await this.loadExamFile().toPromise();
      this.simulados = data;
      return this.simulados;
    }catch(error){
      console.error("Erro ao carregar os exames:", error);
    }
  }

  async getExam(examName:string){
    try{
      const data: any = await this.loadExamFile().toPromise();
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
