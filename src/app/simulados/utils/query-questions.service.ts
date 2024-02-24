import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryQuestionsService {
  private endpoint = 'http://localhost:8080/api/simulados/questions/';

  constructor(private httpClient: HttpClient ) { }

  getQuestions(exam: string) {
    return this.httpClient.get(this.endpoint + exam);
  }
}
