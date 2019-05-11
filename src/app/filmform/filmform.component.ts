import { Component, OnInit } from '@angular/core';
import {Films} from './films';
import {HttpClient} from '@angular/common/http';
import {Filmservice} from './filmservice';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-filmform',
  templateUrl: './filmform.component.html',
  styleUrls: ['./filmform.component.css']
})
export class FilmformComponent implements OnInit {

   constructor(private httpService: Filmservice) {}
  //
   ngOnInit() {
     this.httpService.getFilms();
     this.resetForm();
   }
   submit(film: Films) {
     this.httpService.postFilms().subscribe((data: Films) => this.httpService.films.push(data));
   }
  showForEdit(film: Films) {
     this.httpService.film = Object.assign({}, film);
  }
   delete(id: number) {
     this.httpService.delete(id).subscribe(result => {
       console.log(result);
       this.httpService.getFilms();
     });
         // error => console.log('There was an error: ', error.status));
   }
   onSubmit(form: NgForm) {
     if (form.value.id == null) {
       this.httpService.postFilms().subscribe((data: Films) => this.httpService.films.push(data));
       this.httpService.getFilms();
     } else {
       this.httpService.updateFilms(form.value.id).subscribe((data: Films) => { });
       this.httpService.getFilms();
     }
   }
   resetForm(form?: NgForm) {
     if (form != null)
       form.reset();
     this.httpService.film = {
       id: null,
       name: '',
       title: ''
     };
   }
}
