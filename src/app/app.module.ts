import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AlertModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';

//modules
import { ViewModule } from './view/view.module';

//coreui components
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { NgScrollbarModule } from 'ngx-scrollbar';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  TableModule,
  CalloutModule 
} from '@coreui/angular';



function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://account.videocake.ir:40443/auth/',
        realm: 'ettesal',
        clientId: 'dweb1',
      },

      initOptions: {
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}

@NgModule({
  declarations: [AppComponent, LoginComponent, LayoutComponent, DefaultHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    AlertModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    SidebarModule,
    NgScrollbarModule,
    IconModule,
    HeaderModule,
    NavModule,
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    ListGroupModule,
    ProgressModule,
    SharedModule,
    TabsModule,
    UtilitiesModule,
    TableModule,
    UtilitiesModule,
    CalloutModule  
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // },
    IconSetService,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
