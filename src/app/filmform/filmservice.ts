import {HttpClient, HttpParams} from '@angular/common/http';
import {Films} from './films';
import {Injectable} from '@angular/core';

@Injectable()
export class Filmservice {
  films: Films [] = [];
  film: Films = new Films(0, ' ', ' ');
  constructor(private http: HttpClient) {}
  getFilms() {
  return this.http.get('http://localhost:8080/film').subscribe((films: Films []) => this.films = films);
  }
  postFilms() {
    return this.http.post('http://localhost:8080/film', this.film);
  }
  updateFilms(id: number) {
    return this.http.put('http://localhost:8080/film/' + id, this.film);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:8080/film/' + id, { responseType: 'text' });
  }
}

