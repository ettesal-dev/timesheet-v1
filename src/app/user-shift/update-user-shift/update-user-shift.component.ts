import { Component } from '@angular/core';
import { FetchUserShiftService } from '../fetch-user-shift.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-user-shift',
  templateUrl: './update-user-shift.component.html',
  styleUrls: ['./update-user-shift.component.scss']
})
export class UpdateUserShiftComponent {
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
  constructor(public visible: FetchUserShiftService){}
  // userId = new FormControl('',[Validators.required])
  // shiftId = new FormControl('',[Validators.required])
  isExpired  = new FormControl('')
  activation = new FormControl('')
  expiration = new FormControl('')

  userShiftUpdateForm = new FormGroup({
    //get from service
    // userId : this.userId,
    // shiftId: this.shiftId,
    //
    isExpired: this.isExpired,
    activation: this.activation,
    expiration: this.expiration
  })
  patchUserShift(){
    //console.log(this.userShiftUpdateForm.value)
    //console.log(this.visible.userId, this.visible.shiftId)
    //we should send userShiftUpdateForm values and this.visible.userId and this.visible.shiftId as required parameters of PATCH/usershifts
    this.userShiftUpdateForm.reset()
  }
}
