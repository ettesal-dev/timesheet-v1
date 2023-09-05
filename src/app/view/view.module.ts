import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { WorkLoggerComponent } from './work-logger/work-logger.component';
import { WorkShiftComponent } from './work-shift/work-shift.component';

//coreui components
import { CalloutModule, CardModule , ListGroupModule, ModalModule, OffcanvasModule, TableModule, UtilitiesModule, ButtonModule   } from '@coreui/angular';



@NgModule({
  declarations: [
    ProfileComponent,
    ReportComponent,
    WorkLoggerComponent,
    WorkShiftComponent
  ],
  imports: [
    CommonModule,
    CalloutModule,
    CardModule,
    ListGroupModule,
    ModalModule ,
    OffcanvasModule,
    TableModule,
    UtilitiesModule,
    ButtonModule 
  ],
  exports:[
    ProfileComponent,
    ReportComponent,
    WorkLoggerComponent,
    WorkShiftComponent
  ]
})
export class ViewModule { }
