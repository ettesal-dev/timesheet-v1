import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  userRoles: any[] = [];
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
    //get role without getUserRoles()
    // if (this.isAuthenticated) {
    //   const keycloakInstance = this.keycloakService.getKeycloakInstance();
    //   if (keycloakInstance && keycloakInstance.realmAccess && keycloakInstance.realmAccess.roles) {
    //     const realmRoles = keycloakInstance.realmAccess.roles;

    //     // Access roles for specific resources
    //     const resourceAccess = keycloakInstance.resourceAccess;
    //     const resourceRoles = resourceAccess ? Object.values(resourceAccess) : [];

    //     // Combine roles from both realm and resource access
    //     const allRoles = [...realmRoles, ...resourceRoles];

    //     // Filter out duplicates
    //     this.userRoles = [...new Set(allRoles)];

    //     console.log('User Roles:', this.userRoles);
    //   } else {
    //     console.error('User roles not available.');
    //   }
    // } else {
    //   console.error('User not authenticated.');
    // }

    //roles
    if (this.isAuthenticated) {
      // Check if the user has a specific role
      const isAdmin = this.keycloakService.isUserInRole('role1');
      console.log('Is user:', isAdmin);

      // Get user roles (realm roles by default)
      const userRoles = this.keycloakService.getUserRoles();
      console.log('User Roles:', userRoles);

      // Get all roles, including client roles
      const allUserRoles = this.keycloakService.getUserRoles(true);
      console.log('All User Roles:', allUserRoles);
    } else {
      console.error('User not authenticated.');
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

    } catch (error) {
      console.error('Error fetching token or username:', error);
    }
  }
}
