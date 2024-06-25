import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionInterface } from './question-interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryQuestionsService {
  private root: string = environment.endpoint;
  question: QuestionInterface;

  constructor(private httpClient: HttpClient ) { }

  private loadQuestionFile(pathname:string) {
    return this.httpClient.get(pathname);
  }

  private formatQuestionIndex(index: string){
    while(index.length < 3){
      index = '0' + index;
    }
    return index;
  }

  async getQuestion(exam: string, index: string) {
    try{
      let pathname = this.root + exam + '/question-' + this.formatQuestionIndex(index) + '.json';
      const data: any = await this.loadQuestionFile(pathname).toPromise();
      this.question = data;
      return this.question;
    }catch(error){
      console.error("Erro ao carregar os exames:", error);
    }
  }
}
