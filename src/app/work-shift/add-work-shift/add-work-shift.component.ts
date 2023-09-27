import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-work-shift',
  templateUrl: './add-work-shift.component.html',
  styleUrls: ['./add-work-shift.component.scss']
})
export class AddWorkShiftComponent {
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
  constructor(private fb: FormBuilder){}
  //type 1 form
  nameTypeOne = new FormControl('',Validators.required)
  startTypeOne = new FormControl('',Validators.required)
  endTypeOne = new FormControl('',Validators.required)
  flexTimeTypeOne = new FormControl('',Validators.required)
  dayNumber = new FormControl('',Validators.required)
  permitTimeTypeOne = new FormControl('',Validators.required)

  daysForm = this.fb.group({
    dayNumber: this.dayNumber
  })

  workShiftTypeOneForm =this.fb.group({
    nameTypeOne: this.nameTypeOne,
    startTypeOne: this.startTypeOne,
    endTypeOne: this.endTypeOne,
    flexTimeTypeOne: this.flexTimeTypeOne,
    days: this.fb.array([], Validators.required),
    permitTimeTypeOne: this.permitTimeTypeOne
  })

  get days() {
    return this.workShiftTypeOneForm.controls['days'] as FormArray;
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
  nameTypeTwo = new FormControl('',Validators.required)
  startTypeTwo = new FormControl('',Validators.required)
  endTypeTwo = new FormControl('',Validators.required)
  flexTimeTypeTwo = new FormControl('',Validators.required)
  dateTypeTwo = new FormControl('',Validators.required)
  permitTimeTypeTwo = new FormControl('',Validators.required)

  workShiftTypeTwoForm = new FormGroup({
    nameTypeTwo: this.nameTypeTwo,
    startTypeTwo: this.startTypeTwo,
    endTypeTwo: this.endTypeTwo,
    flexTimeTypeTwo: this.flexTimeTypeTwo,
    dateTypeTwo: this.dateTypeTwo,
    permitTimeTypeTwo: this.permitTimeTypeTwo
  })

  //POST type one
  postTypeOne(){
    const result = {
      nameTypeOne: this.workShiftTypeOneForm.value.nameTypeOne,
      startTypeOne:this.workShiftTypeOneForm.value.startTypeOne,
      endTypeOne:this.workShiftTypeOneForm.value.endTypeOne,
      flexTimeTypeOne:this.workShiftTypeOneForm.value.flexTimeTypeOne,
      days:this.workShiftTypeOneForm.value.days?.map(
        (obj: any) => obj.attendeesName
      ),
      permitTimeTypeOne:this.workShiftTypeOneForm.value.permitTimeTypeOne
    }
    //console.log(result)
    this.workShiftTypeOneForm.reset()
  }
  //POST type two
  postTypeTwo(){
    //console.log(this.workShiftTypeTwoForm.value)
    this.workShiftTypeTwoForm.reset()
  }

}
