import { Component } from '@angular/core';

import { InfoService } from './services/info.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _is: InfoService,
                      _ps: PostService) {

  }
}
