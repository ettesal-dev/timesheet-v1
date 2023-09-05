import { Component } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import { navItems } from './_nav';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends HeaderComponent {
  public navItems = navItems
  constructor(private classToggler: ClassToggleService, private keycloakService: KeycloakService){
    super()
  }
  logOut(): void {
    this.keycloakService.logout(window.location.origin);
  }
}
