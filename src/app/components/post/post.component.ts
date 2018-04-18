import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post: any = undefined;
  cod: string = undefined;

  constructor( private route: ActivatedRoute,
                public _ts: TimelineService) {
                  route.params.subscribe( parametros => {

                    // _ts.load_post( parametros['id']).subscribe ( res => {
                    //     this.cod = parametros['id'];
                    //     this.post = res.json();
                    // });
                  });
          }
}
