import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {

  info: any = {};
  loading_info = false;

  constructor(public http: Http) {
    this.load_info();
  }
  public load_info() {
    this.http.get('https://naisu-6fa2c.firebaseio.com/about.json')
            .subscribe( data => {
                  // console.log(data.json());
                  this.loading_info = true;
                  this.info = data.json();
            });
  }
}
