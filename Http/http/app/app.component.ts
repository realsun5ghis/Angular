import { Component,  OnInit } from '@angular/core';
import { SearchService } from './search.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.data = this.searchService.search('001');
  }
}
