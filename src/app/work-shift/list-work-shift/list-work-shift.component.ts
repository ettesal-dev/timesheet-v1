import { Component } from '@angular/core';
import { FetchWorkShiftService } from '../fetch-work-shift.service';

@Component({
  selector: 'app-list-work-shift',
  templateUrl: './list-work-shift.component.html',
  styleUrls: ['./list-work-shift.component.scss']
})
export class ListWorkShiftComponent {
  workShifts:any[] = [
    {
      id: "3fa85f64-1111-4562-b3fc-2c963f66afa6",
      name: "shift 1",
      days: ["1","2"],
      type: "1",
      date: null,
      start_time: "12:00",
      end_time: "13:00",
      flex_time: "02:00",
      permit_time: "01:00"
    },
    {
      id: "3fa85f64-2222-4562-b3fc-2c963f66afa6",
      name: "shift 2",
      days: null,
      type: "2",
      date: "2023-06-07",
      start_time: "12:00",
      end_time: "13:00",
      flex_time: "02:00",
      permit_time: "01:00"
    },
    {
      id: "3fa85f64-3333-4562-b3fc-2c963f66afa6",
      name: "shift 3",
      days: ["1","2","3","4","5"],
      type: "1",
      date: null,
      start_time: "12:00",
      end_time: "13:00",
      flex_time: "02:00",
      permit_time: "01:00"
    }
  ]
  constructor(public visible: FetchWorkShiftService){}
  
  dayConverter(day:string){
    switch(day){
      case "1":
        return "دوشنبه"
      case "2":
        return "سه‌شنبه"
      case "3":
        return "چهارشنبه"
      case "4":
        return "پنجشنبه"
      case "5":
        return "جمعه"
      case "6":
        return "شنبه"
      case "7":
        return "یکشنبه"
      default: 
        return "not defined"
    }
  }

  //GET
  getWorkShift(){

  }
  //DELETE
  deleteWorkShift(id:string){
    
  }
}
