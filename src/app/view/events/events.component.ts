import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  
  events:any[] = []
  constructor(private fb: FormBuilder) {}

  //get data from form for post new holiday
  creatorName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  eventName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  eventDate = new FormControl('', [Validators.required]);
  startTime = new FormControl('', [Validators.required]);
  endTime = new FormControl('', [Validators.required]);
  attendeesName = new FormControl('', [Validators.required])
  
  attendeesForm = this.fb.group({
    attendeesName: this.attendeesName
  });

  eventForm = this.fb.group({
    creatorName: this.creatorName,
    eventName: this.eventName,
    eventDate: this.eventDate,
    startTime: this.startTime,
    endTime: this.endTime,
    attendees: this.fb.array([]),
  });

  get attendees(){
    return this.eventForm.controls['attendees'] as FormArray;
  }

  deleteAttendees(index:number){

  }

  postEvent() {
    
    
  }
  addToName() {
    //const newName = new FormControl("my name");
    //this.attendees.push(newName)
    const ad = this.fb.group({
      attendeesName: new FormControl('', [Validators.required]),
    });
    
    this.attendees.push(ad);
  }
}
