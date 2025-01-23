import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryCodeService {
  private root: string = environment.endpoint;

  constructor(private httpClient: HttpClient ) { }

  private loadCodeFile(pathname:string) {
    return this.httpClient.get(pathname, {responseType: 'text'});
  }

  async getCode(relativePath: string) {
    try{
      let pathname = this.root + relativePath;
      const data: any = await lastValueFrom(this.loadCodeFile(pathname));
      return data;
    }catch(error){
      console.error("Erro ao carregar o código:", error);
    }
  }
}
