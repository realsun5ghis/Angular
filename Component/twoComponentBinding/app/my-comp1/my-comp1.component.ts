import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-comp1',
  templateUrl: './my-comp1.component.html',
  styleUrls: ['./my-comp1.component.css']
})
export class MyComp1Component  {
  @Input() count ;
  @Output() result = new EventEmitter<number>();

  increment() {
    this.count++;
    this.result.emit(this.count);
  }
}
