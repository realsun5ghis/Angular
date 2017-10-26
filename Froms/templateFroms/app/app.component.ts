import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Bob'; // one way binding
  phone: string ; // two way binding

  register(form: NgForm) {
    console.log(form.value);
  }
}
