import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor( private route: ActivatedRoute,
                public _ps: PostService) {
                  route.params.subscribe( parametros => {
                 _ps.load_post( parametros['id'])
                 .subscribe ( res => {
                    this.cod = parametros['id'];
                    this.post = res.json();
                 });
            });
          }
}
