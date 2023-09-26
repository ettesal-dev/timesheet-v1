import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.scss']
})
export class AddHolidayComponent {
  constructor(private fb: FormBuilder){

  }
  //get data from form for post new holiday
  name = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  holidayArray = this.fb.group({
    name:this.name,
    date:this.date
  });

  holidayForm = this.fb.group({
    holidayList: this.fb.array([], Validators.required),
  });

  get holidayList() {
    return this.holidayForm.controls['holidayList'] as FormArray;
  }

  addHolidayList() {
    const ad = this.fb.group({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });

    this.holidayList.push(ad);
  }

  deleteHolidayList(index: number) {
    this.holidayList.removeAt(index);
  }

  //POST data
  postHoliday() {
    //console.log("holiday form array",this.holidayForm.value.holidayList)
    this.holidayForm.reset();
  }
}
