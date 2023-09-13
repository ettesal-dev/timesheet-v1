import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { WorkLoggerComponent } from './work-logger/work-logger.component';
import { WorkShiftComponent } from './work-shift/work-shift.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { LogsComponent } from './logs/logs.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { EventsComponent } from './events/events.component';

//coreui components
import { CalloutModule, CardModule , ListGroupModule, ModalModule, OffcanvasModule, TableModule, UtilitiesModule, ButtonModule,FormModule    } from '@coreui/angular';







@NgModule({
  declarations: [
    ProfileComponent,
    ReportComponent,
    WorkLoggerComponent,
    WorkShiftComponent,
    DashboardComponent,
    ShiftsComponent,
    LogsComponent,
    HolidaysComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalloutModule,
    CardModule,
    ListGroupModule,
    ModalModule ,
    OffcanvasModule,
    TableModule,
    UtilitiesModule,
    ButtonModule,
    FormModule,
    FormsModule,
     
  ],
  exports:[
    ProfileComponent,
    ReportComponent,
    WorkLoggerComponent,
    WorkShiftComponent,
    DashboardComponent,
    ShiftsComponent,
    LogsComponent,
    HolidaysComponent,
    EventsComponent
  ]
})
export class ViewModule { }
