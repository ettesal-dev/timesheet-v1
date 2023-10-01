import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { SubmitComponent } from './view/submit/submit.component';
import { ReportComponent } from './view/report/report.component';
import { SettingComponent } from './view/setting/setting.component';

import { ShiftsComponent } from './view/shifts/shifts.component';
import { LogsComponent } from './view/logs/logs.component';
import { HolidaysComponent } from './view/holidays/holidays.component';
import { EventsComponent } from './view/events/events.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'submit',
        component: SubmitComponent
      },
      {
        path:'report',
        component: ReportComponent
      },
      {
        path:'setting',
        component: SettingComponent
      },
      // {
      //   path:'shifts',
      //   component: ShiftsComponent
      // },
      // {
      //   path:'logs',
      //   component: LogsComponent
      // },
      // {
      //   path:'holidays',
      //   component: HolidaysComponent
      // },
      // {
      //   path:'events',
      //   component: EventsComponent
      // }
    ]
  },
  {
    path: '**',
    redirectTo: 'layout',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
