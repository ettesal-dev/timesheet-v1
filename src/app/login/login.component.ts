import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private keycloakService: KeycloakService, private router:Router){}
  ngOnInit(): void {
    this.isLogIn()
  }
  isLogIn(){
    this.keycloakService.isLoggedIn()
    .then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        console.log('User is authenticated');
        this.router.navigate(['/layout'])
      } else {
        console.log('User is not authenticated');
      }
    })
    .catch(error => {
      console.error('Error checking authentication:', error);
    });
  }
}
