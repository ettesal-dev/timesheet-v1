import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { LogsComponent } from './logs/logs.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { EventsComponent } from './events/events.component';

//coreui components
import { CalloutModule, CardModule , ListGroupModule, ModalModule, OffcanvasModule, TableModule, UtilitiesModule, ButtonModule,FormModule    } from '@coreui/angular';
//persian number pipe
import { PersianNumberPipe } from './../persian-number.pipe';





@NgModule({
  declarations: [
    DashboardComponent,
    ShiftsComponent,
    LogsComponent,
    HolidaysComponent,
    EventsComponent,
    PersianNumberPipe
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
    DashboardComponent,
    ShiftsComponent,
    LogsComponent,
    HolidaysComponent,
    EventsComponent
  ]
})
export class ViewModule { }
