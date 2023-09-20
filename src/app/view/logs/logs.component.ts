import { Component } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {
  logs: any[] = [{
    id:12,
    user: "new user(it should be id)",
    log_date: new Date('2023-12-01'),
    comment: "this is a comment.",
    is_approved: true,
    time_entrance: "entrance",
    time_exit: "exit"
  }];

}
