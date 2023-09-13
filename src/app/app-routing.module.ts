import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './view/profile/profile.component';
import { ReportComponent } from './view/report/report.component';
import { WorkLoggerComponent } from './view/work-logger/work-logger.component';
import { WorkShiftComponent } from './view/work-shift/work-shift.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
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
    //canActivate: [AuthGuard],
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
        path:'shifts',
        component: ShiftsComponent
      },
      {
        path:'logs',
        component: LogsComponent
      },
      {
        path:'holidays',
        component: HolidaysComponent
      },
      {
        path:'events',
        component: EventsComponent
      }
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
