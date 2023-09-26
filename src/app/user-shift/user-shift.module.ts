import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserShiftComponent } from './add-user-shift/add-user-shift.component';
import { ListUserShiftComponent } from './list-user-shift/list-user-shift.component';
import { UpdateUserShiftComponent } from './update-user-shift/update-user-shift.component';

//persian datepicker
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
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
} from '@coreui/angular';

@NgModule({
  declarations: [
    AddUserShiftComponent,
    ListUserShiftComponent,
    UpdateUserShiftComponent,
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
    TabsModule,
  ],
  exports: [
    AddUserShiftComponent,
    ListUserShiftComponent,
    UpdateUserShiftComponent,
  ],
})
export class UserShiftModule {}
