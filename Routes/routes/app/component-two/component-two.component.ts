import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  private id;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
