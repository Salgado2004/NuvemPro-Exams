import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPlaygroundService {

  constructor(private httpClient: HttpClient) { }

  executeCommand(command: string) {
    return this.httpClient.post("http://localhost:8080/api/cliplayground", command, { observe: 'response' });
  }
}
