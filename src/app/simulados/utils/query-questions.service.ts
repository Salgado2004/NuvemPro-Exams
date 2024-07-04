import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionInterface } from './question-interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryQuestionsService {
  private questions: QuestionInterface[];
  private root: string = environment.endpoint;

  constructor(private httpClient: HttpClient ) { }

  private loadQuestionFile(pathname:string) {
    return this.httpClient.get(pathname);
  }

  async getQuestions(exam: string) {
    try{
      let pathname = this.root + exam + '/questions.json';
      const data: any = await lastValueFrom(this.loadQuestionFile(pathname));
      this.questions = data;
      return this.questions;
    }catch(error){
      console.error("Erro ao carregar as questões:", error);
    }
  }
}
