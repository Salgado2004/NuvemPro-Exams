import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';

@Injectable({
  providedIn: 'root'
})
export class OctokitService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit();
  }

  public createEventDispatch(event: string, payload: {}){
    this.octokit.rest.repos.createDispatchEvent({
      owner: "Salgado2004",
      repo: "NuvemPro-Exams",
      event_type: event,
      client_payload: payload
    });
  }

}
