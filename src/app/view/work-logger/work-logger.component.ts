import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HolidayService } from 'src/app/services/holiday.service';



@Component({
  selector: 'app-work-logger',
  templateUrl: './work-logger.component.html',
  styleUrls: ['./work-logger.component.scss']
  
})
export class WorkLoggerComponent {
  holidays: any[] = [];
  dateHoliday: string = '';
  startDate: string = '';
  endDate: string = '';



  constructor(public holiday: HolidayService) {
    this.getHolidays();
  }



  getDate(date: string) {
    this.dateHoliday = date;
    console.log(this.dateHoliday);
  }

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  date = new FormControl('', [Validators.required]);
  updateName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  updateDate = new FormControl('', [Validators.required]);
  holidayForm = new FormGroup({
    name: this.name,
    date: this.date,
  });
  holidayUpdateForm = new FormGroup({
    updateName: this.updateName,
    updateDate: this.updateDate,
  });

  getHolidays() {
    const startDate = new Date('2023-12-01');
    const endDate = undefined;

    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;
    this.holiday.getHolidays(start, end).subscribe((data) => {
      this.holidays = data;

      console.log(this.holidays);
      console.log(data);
    });
  }
  postHoliday() {
    this.holiday.createHoliday(this.holidayForm.value);
    this.getHolidays()
    this.holidayForm.reset();
  }
  //for use API Url, we should separate date and name from holidayUpdatedForm
  //example: this.holidayUpdateForm.value.updateDate or this.holidayUpdateForm.value.updateName
  putHoliday() {
    this.holiday.updateHoliday(this.holidayUpdateForm.value, this.dateHoliday);
    this.getHolidays()
  }
  deleteHoliday(date:string){
    this.holiday.deleteHoliday(date)
    this.getHolidays()
  }
}
