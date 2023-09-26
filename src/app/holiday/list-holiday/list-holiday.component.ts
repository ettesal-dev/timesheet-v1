import { Component } from '@angular/core';
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
  //for filter holidays
  startDate:any = new FormControl();
  endDate:any = new FormControl();
  constructor(public visible: FetchHolidayService){}

  //GET
  //it must be called in constructor or onInit(prefered) for get data at first of rendering componenet
  getHoliday(start:any, end:any){

  }


  //filter data
  //is it necessary to call it in onInit for any rendering between pages
  filter() {
    //for send to api
    const start = this.startDate.value ? new Date(this.startDate.value) : null;
    const end = this.endDate.value ? new Date(this.endDate.value) : null;
    //console.log(start,end)
    this.getHoliday(start, end)
    
  }
  //DELETE
  deleteHoliday(date: string) {
    
  }
  

}
