import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../httpform/actor';

@Component({
  selector: 'app-modeldrivenform',
  templateUrl: './modeldrivenform.component.html',
  styleUrls: ['./modeldrivenform.component.css']
})
export class ModeldrivenformComponent {

  myForm: FormGroup;
  constructor( private http: HttpClient) {
    this.myForm = new FormGroup({  //создание формы

      "userName": new FormControl("Tom", Validators.required), // добавление полей из шаблона
      "userEmail": new FormControl("", [  // добавление полей из шаблона
        Validators.required, // условия поля
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") // условия поля
      ]),
      "userPhone": new FormControl() // добавление полей из шаблона
    });
  }

  submit(data) {
   // let actor: Actor = new Actor(5, data.userName.toString(), data.userEmail.toString(), data.userPhone.toString());
   // this.http.post('http://localhost:8080/actor', actor)
   //   .subscribe((data: Actor) => console.log(data.firstName));
    console.log(data.userName);
  }
}
