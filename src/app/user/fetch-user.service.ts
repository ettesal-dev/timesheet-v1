import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService implements OnInit{

  userName: string = ''
  userToken: string = ''

  isAuthenticated: boolean = false;
  userProfile: KeycloakProfile | null = null; // Initialize userProfile as null

  constructor(private keycloakService: KeycloakService, private jwtHelper: JwtHelperService) {}

  async ngOnInit() {
    // Check if the user is authenticated
    this.isAuthenticated = await this.keycloakService.isLoggedIn();

    if (this.isAuthenticated) {
      // Load the user profile
      try {
        this.userProfile = await this.keycloakService.loadUserProfile();
        this.displayTokenAndUsername();
      } catch (error) {
        console.error('Error loading user profile:', error);
      }
    }
  }

  async displayTokenAndUsername() {
    try {
      const token = await this.keycloakService.getToken();
      const username = this.userProfile?.username || 'Username not available';

      const decodedToken = this.jwtHelper.decodeToken(token);
      const userId = decodedToken.sub; // 'sub' typically contains the user's ID

      console.log('User ID:', userId);
      console.log('Token:', token);
      console.log('Username:', username);
      this.userName = username
      this.userToken = token
    } catch (error) {
      console.error('Error fetching token or username:', error);
    }
  }
}
