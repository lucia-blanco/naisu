import { Component, OnInit } from '@angular/core';

import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  year: number = new Date().getFullYear();

  constructor( public _is: InfoService ) {}
}
