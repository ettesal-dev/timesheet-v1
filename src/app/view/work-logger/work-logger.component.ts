import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HolidayService } from 'src/app/services/holiday.service';

@Component({
  selector: 'app-work-logger',
  templateUrl: './work-logger.component.html',
  styleUrls: ['./work-logger.component.scss'],
})
export class WorkLoggerComponent {
  isEditing: boolean = false
  isEditingArray: boolean[] = [];
  // isEditingArray: boolean[] = Array(this.getHolidays.length).fill(false);
  holidays: any[] = [];

  constructor(public holiday: HolidayService) {
    this.getHolidays();
  }
  toogleEditing(index:number){
    this.isEditingArray[index] = !this.isEditingArray[index]
    console.log(this.isEditingArray[index])
  }

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  date = new FormControl('', [Validators.required]);
  holidayForm = new FormGroup({
    name: this.name,
    date: this.date,
  });

  getHolidays() {
    this.holiday.getHolidays().subscribe((data) => {
      this.holidays = data;
      this.isEditingArray = Array(this.holidays.length).fill(false);
      console.log(this.holidays);
      console.log(data);
    });
  }
  postHoliday() {
    this.holiday.createHoliday(this.holidayForm.value);
    this.holidayForm.reset();
    //console.log(this.isEditingArray)
  }
  putHoliday(){
    
  }
}
