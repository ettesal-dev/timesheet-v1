import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user-shift',
  templateUrl: './add-user-shift.component.html',
  styleUrls: ['./add-user-shift.component.scss']
})
export class AddUserShiftComponent {
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
  //should be got from workShifts API
  shifts: any[] = [
    {
      shift_id: "3fa85f64-2314-4562-b3fc-2c963f66afa6",
      shift_name: "shift 1"
    },
    {
      shift_id: "3fa85f64-8772-4562-b3fc-2c963f66afa6",
      shift_name: "shift 2"
    },
    {
      shift_id: "3fa85f64-9901-4562-b3fc-2c963f66afa6",
      shift_name: "shift 3"
    },
    {
      shift_id: "3fa85f64-3395-4562-b3fc-2c963f66afa6",
      shift_name: "shift 4"
    }
  ]

  constructor(){}
  userId = new FormControl('',[Validators.required])
  shiftId = new FormControl('',[Validators.required])
  activation = new FormControl('',[Validators.required])
  expiration = new FormControl('')

  updateUserShiftForm = new FormGroup({
    userId : this.userId,
    shiftId : this.shiftId,
    activation : this.activation,
    expiration : this.expiration
  })

  //POST
  addUserShift(){
    //console.log(this.updateUserShiftForm.value)
    this.updateUserShiftForm.reset()
  }
}
