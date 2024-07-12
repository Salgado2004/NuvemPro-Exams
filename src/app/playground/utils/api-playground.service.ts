import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPlaygroundService {
  private token: string;
  private expiration: string;
  private api = environment.api;
  private headers: { [key: string]: string };

  constructor(private httpClient: HttpClient) {
    this.requestToken().subscribe((response: any) => {
      this.token = response.token;
      this.expiration = response.expiring;
    });
  }

  requestToken() {
    return this.httpClient.get(this.api + '/token');
  }

  async validateToken(): Promise<string> {
    if (this.expiration == null || new Date() >= new Date(this.expiration)) {
      console.log(new Date(this.expiration));
      const response: any = await lastValueFrom(this.requestToken());
      this.token = response.token;
      this.expiration = response.expiring;

      return this.token;
    } else {
      console.log(new Date(this.expiration));
      return this.token;
    }
  }

  async executeCommand(command: string) {
    if (environment.production) {
      try{
        this.token = await this.validateToken();
        
        this.headers = {
          'Content-Type': 'text/plain',
          'Authorization': "Bearer " + this.token
        };
        return this.httpClient.post(this.api, command, { headers: this.headers, observe: 'response' });

      } catch(error){
        console.error("Erro ao executar o comando:", error);
      }
    } else{
      return this.httpClient.post(this.api, command, { observe: 'response' });
    }
  }
}
