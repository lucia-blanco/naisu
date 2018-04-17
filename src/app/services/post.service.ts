import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  posts: any[] = [];
  loading_posts = true;
  loading_post = true;

  constructor( private http: Http) {
    this.load_posts();
  }

  public load_post( cod: string) {
    setTimeout(() => {
      this.loading_post = true;
      return this.http.get(`https://naisu-6fa2c.firebaseio.com/post/${ cod }.json`);
    }, 800);
  }

  public load_posts() {

    this.loading_posts = true;

    const promesa = new Promise(( resolve, reject ) => {

      this.http.get('https://naisu-6fa2c.firebaseio.com/home.json')
        .subscribe( res => {
          // console.log( res.json());

          setTimeout(() => {
            this.loading_posts = false;
            this.posts = res.json();
            resolve();
          }, 800);
        });
    });

    return promesa;

  }
}
