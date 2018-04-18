import { Component } from '@angular/core';

import { InfoService } from './services/info.service';
import { TimelineService } from './services/timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _is: InfoService,
                      _ts: TimelineService) {

  }
}
