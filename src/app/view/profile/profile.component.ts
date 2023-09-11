import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private keycloakService: KeycloakService) { }
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.keycloakService.loadUserProfile()
    this.keycloakService.getUsername()
    this.keycloakService.getUserRoles()
    
    console.log(this.keycloakService.loadUserProfile())
    console.log(this.keycloakService.getUsername())
    console.log(this.keycloakService.getUserRoles())
  }
}
