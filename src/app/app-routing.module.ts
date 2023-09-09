import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './view/profile/profile.component';
import { ReportComponent } from './view/report/report.component';
import { WorkLoggerComponent } from './view/work-logger/work-logger.component';
import { WorkShiftComponent } from './view/work-shift/work-shift.component';

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
        redirectTo:'profile'
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'report',
        component: ReportComponent
      },
      {
        path:'worklogger',
        component: WorkLoggerComponent
      },
      {
        path:'workshift',
        component: WorkShiftComponent
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
