import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListLogComponent } from './list-log/list-log.component';
import { AddLogEntranceComponent } from './add-log-entrance/add-log-entrance.component';
import { AddLogExitComponent } from './add-log-exit/add-log-exit.component';

//persian datepicker
import { NgPersianDatepickerModule } from 'ng-persian-datepicker'
//coreui components
import { CalloutModule, CardModule , ListGroupModule, ModalModule, OffcanvasModule, TableModule, UtilitiesModule, ButtonModule,FormModule, NavModule,TabsModule } from '@coreui/angular';



@NgModule({
  declarations: [
    ListLogComponent,
    AddLogEntranceComponent,
    AddLogExitComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgPersianDatepickerModule,
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
    TabsModule
  ],
  exports: [
    ListLogComponent,
    AddLogEntranceComponent,
    AddLogExitComponent
  ]
})
export class LogModule { }
