import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root', // как обращаемся к компоненту <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({

      "userName": new FormControl("Tom", Validators.required),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ]),
      "userPhone": new FormControl()
    });
  }

  submit(){
    console.log(this.myForm);
  }
}
