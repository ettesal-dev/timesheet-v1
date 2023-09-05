import { Component } from '@angular/core';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keycloakapp';
  constructor(private iconSetService: IconSetService){
    iconSetService.icons = { ...iconSubset };
  }
}
