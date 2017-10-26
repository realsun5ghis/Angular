import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp1',
  templateUrl: './my-comp1.component.html',
  styleUrls: ['./my-comp1.component.css']
})
export class MyComp1Component implements OnInit {
   public title:string;
  constructor() { }

  ngOnInit() {
    this.title = 'myTitle abc';
  }
  onClick2(enent){
    this.title='onclick change title...';
  }
}
