import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from './actor';

@Injectable() // данный класс является внедряемый куда нибудь
export class Httpservice {
  constructor(private http: HttpClient) {}
  getActors() {
    return this.http.get('http://localhost:8080/actor');
  }
  postActor(actor: Actor) {
    return this.http.post('http://localhost:8080/actor', actor);
  }
}
