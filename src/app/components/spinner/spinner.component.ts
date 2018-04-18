import { Component } from '@angular/core';

import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  constructor(public _ts: TimelineService) { }

}
