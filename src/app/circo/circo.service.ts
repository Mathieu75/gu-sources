import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CircoService {

  private data: Promise<any>;

  constructor(private http: Http) {
    // lien vers le document : https://docs.google.com/spreadsheets/d/1gYZNVhUxGogX-8WnVLvWoWiaUg0r0seAOK0AbCoEKPE/edit?usp=sharing
    this.data = http.get('https://spreadsheets.google.com/feeds/list/1gYZNVhUxGogX-8WnVLvWoWiaUg0r0seAOK0AbCoEKPE/1/public/values?alt=json')
      .map(res => res.json().feed.entry)
      .toPromise();
  }

  getAll(): Promise<any> {
    return this.data;
  }

}
