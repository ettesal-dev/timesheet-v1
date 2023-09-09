import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { WorkLoggerComponent } from './work-logger/work-logger.component';
import { WorkShiftComponent } from './work-shift/work-shift.component';

//coreui components
import { CalloutModule, CardModule , ListGroupModule, ModalModule, OffcanvasModule, TableModule, UtilitiesModule, ButtonModule,FormModule    } from '@coreui/angular';


import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
defineLocale('fa', deLocale);
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';





@NgModule({
  declarations: [
    ProfileComponent,
    ReportComponent,
    WorkLoggerComponent,
    WorkShiftComponent
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
    BsDatepickerModule.forRoot()  
  ],
  exports:[
    ProfileComponent,
    ReportComponent,
    WorkLoggerComponent,
    WorkShiftComponent
  ]
})
export class ViewModule { }
