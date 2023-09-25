import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FetchHolidayService } from '../fetch-holiday.service';

@Component({
  selector: 'app-update-holiday',
  templateUrl: './update-holiday.component.html',
  styleUrls: ['./update-holiday.component.scss']
})
export class UpdateHolidayComponent {
  updateName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  updateDate = new FormControl('', [Validators.required]);
  holidayUpdateForm = new FormGroup({
    updateName: this.updateName,
    updateDate: this.updateDate,
  });

  constructor(public visible: FetchHolidayService){}

  //PUT
  putHoliday(){
    this.holidayUpdateForm.reset()
  }

}
