import { Component } from '@angular/core';

import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public _is: InfoService) { }

}
