import { Component } from '@angular/core';
import { FetchWorkShiftService } from '../fetch-work-shift.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-update-work-shift',
  templateUrl: './update-work-shift.component.html',
  styleUrls: ['./update-work-shift.component.scss']
})
export class UpdateWorkShiftComponent {
  constructor(public visible: FetchWorkShiftService, private fb: FormBuilder){}
  numbers = [
    {
      name:"شنبه",
      value:"6"
    },
    {
      name:"یکشنبه",
      value:"7"
    },
    {
      name:"دوشنبه",
      value:"1"
    },
    {
      name:"سه‌شنبه",
      value:"2"
    },
    {
      name:"چهارشنبه",
      value:"3"
    },
    {
      name:"پنجشنبه",
      value:"4"
    },
    {
      name:"جمعه",
      value:"5"
    }
  ]
  
  //type 1 form
  startTypeOne = new FormControl('',Validators.required)
  endTypeOne = new FormControl('',Validators.required)
  flexTimeTypeOne = new FormControl('',Validators.required)
  dayNumber = new FormControl('',Validators.required)
  permitTimeTypeOne = new FormControl('',Validators.required)

  daysForm = this.fb.group({
    dayNumber: this.dayNumber
  })

  updateWorkShiftTypeOneForm =this.fb.group({
    startTypeOne: this.startTypeOne,
    endTypeOne: this.endTypeOne,
    flexTimeTypeOne: this.flexTimeTypeOne,
    days: this.fb.array([], Validators.required),
    permitTimeTypeOne: this.permitTimeTypeOne
  })

  get days() {
    return this.updateWorkShiftTypeOneForm.controls['days'] as FormArray;
  }

  addDays() {
    const ad = this.fb.group({
      attendeesName: new FormControl('', [Validators.required]),
    });

    this.days.push(ad);
  }

  deleteDays(index: number) {
    this.days.removeAt(index);
  }
  //tpye 2 form
  startTypeTwo = new FormControl('',Validators.required)
  endTypeTwo = new FormControl('',Validators.required)
  flexTimeTypeTwo = new FormControl('',Validators.required)
  dateTypeTwo = new FormControl('',Validators.required)
  permitTimeTypeTwo = new FormControl('',Validators.required)

  updateworkShiftTypeTwoForm = new FormGroup({
    startTypeTwo: this.startTypeTwo,
    endTypeTwo: this.endTypeTwo,
    flexTimeTypeTwo: this.flexTimeTypeTwo,
    dateTypeTwo: this.dateTypeTwo,
    permitTimeTypeTwo: this.permitTimeTypeTwo
  })
  //PATCH type 1
  patchTypeOne(){
    //console.log(this.updateWorkShiftTypeOneForm.value)
    this.updateWorkShiftTypeOneForm.reset()
    //for patch we should convert days list with object to just list
  }
  //PATCH type 2
  patchTypeTwo(){
    console.log(this.updateworkShiftTypeTwoForm.value)
    this.updateworkShiftTypeTwoForm.reset()
    //for patch we should convert days list with object to just list
  }

}
