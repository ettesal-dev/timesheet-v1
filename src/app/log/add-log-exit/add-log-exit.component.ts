import { Component } from '@angular/core';
import { FetchUserService } from 'src/app/user/fetch-user.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-log-exit',
  templateUrl: './add-log-exit.component.html',
  styleUrls: ['./add-log-exit.component.scss']
})
export class AddLogExitComponent {
  //i should build app and check the token and username
  userToken:string = "3fa85f64-2211-4562-b3fc-2c963f66afa6"
  constructor(public userInfo: FetchUserService){}
  
  date = new FormControl('',Validators.required)
  time = new FormControl('',Validators.required)
  comment = new FormControl('',Validators.required)

  logEntranceForm = new FormGroup({
    date: this.date,
    time: this.time,
    comment: this.comment
  })

  //POST
  addLogEntrance(){
    console.log(this.logEntranceForm.value)
    this.logEntranceForm.reset()
  }
}
