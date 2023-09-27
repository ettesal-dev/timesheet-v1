import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddWorkShiftComponent } from './add-work-shift/add-work-shift.component';
import { ListWorkShiftComponent } from './list-work-shift/list-work-shift.component';
import { UpdateWorkShiftComponent } from './update-work-shift/update-work-shift.component';

//persian datepicker
import { NgPersianDatepickerModule } from 'ng-persian-datepicker'
//coreui components
import { CalloutModule, CardModule , ListGroupModule, ModalModule, OffcanvasModule, TableModule, UtilitiesModule, ButtonModule,FormModule, NavModule,TabsModule } from '@coreui/angular';



@NgModule({
  declarations: [
    AddWorkShiftComponent,
    ListWorkShiftComponent,
    UpdateWorkShiftComponent
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
    AddWorkShiftComponent,
    ListWorkShiftComponent,
    UpdateWorkShiftComponent
  ]
})
export class WorkShiftModule { }
