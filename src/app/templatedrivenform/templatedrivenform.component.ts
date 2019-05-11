import { Component, OnInit } from '@angular/core';
import {Phone} from '../phone';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent  {

  phone: Phone = new Phone("MODEL", 10000, "Huawei"); // шаблон по добавлению телефона с полями по умолчанию
  phones: Phone[] = [];  // контейнер для обьектов
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"]; // список моделей для выбора

  addPhone(title: string, price: number, company: string){ // добавление обьекта по полям ввода
    this.phones.push(new Phone(title, price, company));
  }
  addPhone1(){ // todo
    this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  }
}
