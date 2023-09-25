import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FetchHolidayService } from '../fetch-holiday.service';

@Component({
  selector: 'app-list-holiday',
  templateUrl: './list-holiday.component.html',
  styleUrls: ['./list-holiday.component.scss']
})
export class ListHolidayComponent {
  
  holidays: any[] = [
    {
      name: "new year",
      date: "2022-04-05"
    },
    {
      name: "holidya",
      date: "2022-07-09"
    }
  ];
  startDate:any = new FormControl();
  endDate:any = new FormControl();
  constructor(public visible: FetchHolidayService){}

  getDate(date: string) {
    
  }

  //GET data
  getHolidays() {
    //for send to api
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;
    
  }
  //DELETE
  deleteHoliday(date: string) {
    
  }
  

}
