import { Component } from '@angular/core';
import { FetchUserShiftService } from '../fetch-user-shift.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-user-shift',
  templateUrl: './list-user-shift.component.html',
  styleUrls: ['./list-user-shift.component.scss']
})
export class ListUserShiftComponent {
  //should be got from users API
  users: any[] = [
    {
      user_id: "3fa85f64-7629-4562-b3fc-2c963f66afa6",
      user_name: "user 1"
    },
    {
      user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      user_name: "user 2"
    },
    {
      user_id: "3fa85f64-9081-4562-b3fc-2c963f66afa6",
      user_name: "user 3"
    }
  ]
  //should be got from users shifts API
  userShifts: any[] = [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'user 1',
      days: ['1', '2', '3'],
      type: '1',
      date: "1402-04-04",
      start_time: "12:12",
      end_time: "14:15",
      flex_time: "04:00",
      permit_time: "02:00"
    },
    {
      id: '3fa85f64-6671-6655-b3fc-2c963f66afa6',
      name: 'user 2',
      days: ['1', '2'],
      type: '1',
      date: "1402-06-04",
      start_time: "11:00",
      end_time: "14:00",
      flex_time: "04:00",
      permit_time: "02:00"
    }
  ]

   //for filter user shifts
   startDate:any = new FormControl();
   endDate:any = new FormControl();
   specificUser:any = new FormControl(this.users[0].user_id)
  constructor(public visible: FetchUserShiftService){}

  //GET
  getUserShift(start:any, end:any, user:any = this.users[0].user_id){

  }
  filter(){
    //for send to api
    const start = this.startDate.value ? new Date(this.startDate.value) : null;
    const end = this.endDate.value ? new Date(this.endDate.value) : null;
    const user = this.specificUser.value 
    //console.log(start, end, user)
    this.getUserShift(start, end, user)
  }

  //DELETE
  deleteUserShift(id:string){

  }
}
