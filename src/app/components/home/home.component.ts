import { Component } from '@angular/core';

import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public _ts: TimelineService) { }

}
