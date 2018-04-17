import { Component } from '@angular/core';

import { PostService } from '../../services/Post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public _ps: PostService) { }

}
