import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from './actor';
import {Httpservice} from './httpservice';

@Component({
  selector: 'app-httpform',
  templateUrl: './httpform.component.html',
  styleUrls: ['./httpform.component.css']
})
export class HttpformComponent implements OnInit {
  actors: Actor [] = [];
  actor: Actor = new Actor(0," "," "," ");

  // аналог @Autowired
  constructor(private http: Httpservice) {} // внедрение зависимостей - внедрили экземплр класса HTTP CLIENT
// метод ndOnInit выполнится после того как будет загружен компонент
  ngOnInit() {
    this.http.getActors().subscribe((actors: Actor []) => this.actors = actors);
  }

  submit(actor: Actor) {
    this.http.postActor(actor).subscribe((actor1: Actor) => this.actors.push(actor1));
  }
}
