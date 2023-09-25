import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListHolidayComponent } from './list-holiday/list-holiday.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { UpdateHolidayComponent } from './update-holiday/update-holiday.component';

//persian datepicker
import { NgPersianDatepickerModule } from 'ng-persian-datepicker'
//coreui components
import { CalloutModule, CardModule , ListGroupModule, ModalModule, OffcanvasModule, TableModule, UtilitiesModule, ButtonModule,FormModule, NavModule,TabsModule } from '@coreui/angular';



@NgModule({
  declarations: [
    ListHolidayComponent,
    AddHolidayComponent,
    UpdateHolidayComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
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
    TabsModule,
    HttpClientModule
  ],
  exports:[
    AddHolidayComponent,
    ListHolidayComponent,
    UpdateHolidayComponent
  ]
})
export class HolidayModule { }
