import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShiftsComponent } from './shifts/shifts.component';
import { LogsComponent } from './logs/logs.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { EventsComponent } from './events/events.component';

//other modules
import { HolidayModule } from '../holiday/holiday.module';
import { UserShiftModule } from '../user-shift/user-shift.module';

import { SubmitComponent } from './submit/submit.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//coreui components
import {
  CalloutModule,
  CardModule,
  ListGroupModule,
  ModalModule,
  OffcanvasModule,
  TableModule,
  UtilitiesModule,
  ButtonModule,
  FormModule,
  NavModule,
  TabsModule,
  AccordionModule,
  SharedModule
} from '@coreui/angular';
//persian number pipe
import { PersianNumberPipe } from './../persian-number.pipe';
//persian datepicker
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';

@NgModule({
  declarations: [
    DashboardComponent,
    ShiftsComponent,
    LogsComponent,
    HolidaysComponent,
    EventsComponent,
    PersianNumberPipe,
    SubmitComponent,
    ReportComponent,
    SettingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalloutModule,
    CardModule,
    ListGroupModule,
    ModalModule,
    OffcanvasModule,
    TableModule,
    UtilitiesModule,
    ButtonModule,
    FormModule,
    FormsModule,
    HolidayModule,
    UserShiftModule,
    NgPersianDatepickerModule,
    NavModule,
    TabsModule,
    AccordionModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    ShiftsComponent,
    LogsComponent,
    HolidaysComponent,
    EventsComponent,
  ],
})
export class ViewModule {}
