import { Component } from '@angular/core';
import { HolidayService } from 'src/app/services/holiday.service';

@Component({
  selector: 'app-work-logger',
  templateUrl: './work-logger.component.html',
  styleUrls: ['./work-logger.component.scss']
})
export class WorkLoggerComponent {
  holidays: any[] = [];
  newHoliday: any = {
    name: "new one",
    date: "2023-4-6"
  }
  constructor(public holiday: HolidayService){
    this.getHolidays();
  }
  getHolidays() {
    this.holiday.getHolidays().subscribe((data) => {
      this.holidays = data;
      console.log(this.holidays)
    });
  }
  postHoliday(){
    this.holiday.createHoliday(this.newHoliday)
  }
  // deleteHoliday(){
  //   this.holiday.deleteHoliday
  // }
}
