import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {
  data:any;
  errorMessage: any;
  body: string = 'q=001&type=artist';

  constructor(private http: Http) { }

  search(term: string) {
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`).subscribe(data => this.data = data, error => this.errorMessage = <any>error);
    //return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`).map(response => response.json()).catch(response => response.error());
    //return this.http.post(`https://api.spotify.com/v1/search`,this.body).map(response => response.json()).catch(response => response.error());
  }
}
