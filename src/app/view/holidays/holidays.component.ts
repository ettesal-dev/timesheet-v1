import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HolidayService } from 'src/app/services/holiday.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent {
  holidays: any[] = [];
  dateHoliday: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(public holiday: HolidayService, private fb: FormBuilder) {
    this.getHolidays();
  }

  getDate(date: string) {
    this.dateHoliday = date;
    console.log(this.dateHoliday);
  }
  //get data from form for post new holiday
  name = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  holidayArray = this.fb.group({
    name:this.name,
    date:this.date
  });

  holidayForm = this.fb.group({
    holidayList: this.fb.array([], Validators.required),
  });

  get holidayList() {
    return this.holidayForm.controls['holidayList'] as FormArray;
  }

  addHolidayList() {
    const ad = this.fb.group({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });

    this.holidayList.push(ad);
  }

  deleteHolidayList(index: number) {
    this.holidayList.removeAt(index);
  }
  
  //get data from modal for update a holiday
  updateName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  updateDate = new FormControl('', [Validators.required]);
  holidayUpdateForm = new FormGroup({
    updateName: this.updateName,
    updateDate: this.updateDate,
  });


  //GET data
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
  //POST data
  postHoliday() {
    //this.holiday.createHoliday(this.holidayForm.value);
    this.getHolidays();
    console.log("holiday form array",this.holidayForm.value.holidayList)
    this.holidayForm.reset();
  }
  //PUT data
  //for use API Url, we should separate date and name from holidayUpdatedForm
  //example: this.holidayUpdateForm.value.updateDate or this.holidayUpdateForm.value.updateName
  putHoliday() {
    this.holiday.updateHoliday(this.holidayUpdateForm.value, this.dateHoliday);
    this.getHolidays();
  }
  //DELETE data
  deleteHoliday(date: string) {
    this.holiday.deleteHoliday(date);
    this.getHolidays();
  }
}
