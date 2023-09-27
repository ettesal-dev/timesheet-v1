import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FetchLogService } from '../fetch-log.service';

@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.scss'],
})
export class ListLogComponent {
  //should be got from users API
  users: any[] = [
    {
      user_id: '3fa85f64-7629-4562-b3fc-2c963f66afa6',
      user_name: 'user 1',
    },
    {
      user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      user_name: 'user 2',
    },
    {
      user_id: '3fa85f64-9081-4562-b3fc-2c963f66afa6',
      user_name: 'user 3',
    },
  ];
  //should be got from log API
  logs: any[] = [
    {
      date: '2023-04-06',
      time: '12:30',
      comment: 'this is a comment.',
      id: '3fa85f64-2626-4562-b3fc-2c963f66afa6',
      user_id: '3fa85f64-8899-4562-b3fc-2c963f66afa6',
      is_overtime: true,
      approved_time: 'string content',
      type: '1',
    },
    {
      date: '2023-05-23',
      time: '15:00',
      comment: 'this is a comment.',
      id: '3fa85f64-7799-4562-b3fc-2c963f66afa6',
      user_id: '3fa85f64-4400-4562-b3fc-2c963f66afa6',
      is_overtime: false,
      approved_time: 'string content',
      type: '2',
    },
    {
      date: '2023-01-23',
      time: '11:00',
      comment: 'this is a comment.',
      id: '3fa85f64-8923-4562-b3fc-2c963f66afa6',
      user_id: '3fa85f64-1092-4562-b3fc-2c963f66afa6',
      is_overtime: true,
      approved_time: 'string content',
      type: '2',
    },
  ];
  startDate: any = new FormControl();
  endDate: any = new FormControl();
  specificUser: any = new FormControl(this.users[0].user_id);
  specificDate: any = new FormControl()

  //GET logs
  getLogs(start:any, end:any, user:any = this.users[0].user_id, date: any){
    
  }

  filter(){
    const start = this.startDate.value ? new Date(this.startDate.value) : null;
    const end = this.endDate.value ? new Date(this.endDate.value) : null;
    const user = this.specificUser.value 
    const date = this.specificDate.value ? new Date(this.specificDate.value) : null;

    this.getLogs(start,end,user,date) 
  }
}
