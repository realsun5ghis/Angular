import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  num: number ;
  parentNum: number;
  num2: number;

  constructor() {}

  ngOnInit() {
    this.num = 0;
    this.parentNum = 0;
    this.num2 = 0;
  }

  OnCountChange(val: number){
    this.num = val;
    this.parentNum = val;
  }
}
