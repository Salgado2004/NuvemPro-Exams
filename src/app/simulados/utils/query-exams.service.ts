import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryExamsService {
  private endpoint = 'http://localhost:8080/api/simulados/available-exams';

  constructor(private httpClient: HttpClient ) { }

  getAvailableExams() {
    return this.httpClient.get(this.endpoint);
  }
}
