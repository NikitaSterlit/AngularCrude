import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ModeldrivenformComponent } from './modeldrivenform/modeldrivenform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpformComponent } from './httpform/httpform.component';
import {HttpClientModule} from '@angular/common/http';
import {Httpservice} from './httpform/httpservice';
import { FilmformComponent } from './filmform/filmform.component';
import {Filmservice} from './filmform/filmservice';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    ModeldrivenformComponent,
    HttpformComponent,
    FilmformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Httpservice, Filmservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
