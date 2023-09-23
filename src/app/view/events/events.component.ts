import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  //for event table and GET events
  events: any[] = [{
    id:12,
    creatorName: "John Doe",
    eventName: "My Event",
    eventDate: new Date('2023-12-01'),
    startTime: "start",
    endTime: "end",
    attendees:["user 1","user 2", "user 3"]
  }];
  //for users from keycloak
  users: any[] = ["user 1", "user 2", "user 3"]
  updateParameters:any = {
    eventId: "",
    eventDate:"",
    eventStart: "",
    eventEnd:""
  }

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
  attendeesName = new FormControl('', [Validators.required]);

  attendeesForm = this.fb.group({
    attendeesName: this.attendeesName,
  });

  eventForm = this.fb.group({
    creatorName: this.creatorName,
    eventName: this.eventName,
    eventDate: this.eventDate,
    startTime: this.startTime,
    endTime: this.endTime,
    attendees: this.fb.array([], Validators.required),
  });
  //for update attendees
  updateAttendeesForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
  });

  updatedEventForm = this.fb.group({
    updatedAttendees: this.fb.array([],Validators.required),
  });

  get attendees() {
    return this.eventForm.controls['attendees'] as FormArray;
  }

  addAttendees() {
    const ad = this.fb.group({
      attendeesName: new FormControl('', [Validators.required]),
    });

    this.attendees.push(ad);
  }

  deleteAttendees(index: number) {
    this.attendees.removeAt(index);
  }

  get updatedAttendees() {
    return this.updatedEventForm.controls['updatedAttendees'] as FormArray;
  }

  addUpdatedAttendees() {
    const ad = this.fb.group({
      name: new FormControl('', [Validators.required]),
    });

    this.updatedAttendees.push(ad);
  }

  deleteUpdatedAttendees(id: number) {
    this.updatedAttendees.removeAt(id);
  }
  //post method
  postEvent() {
    const result = {
      creatorName: this.eventForm.value.creatorName,
      eventName: this.eventForm.value.eventName,
      eventDate: this.eventForm.value.eventDate,
      startTime: this.eventForm.value.startTime,
      endTime: this.eventForm.value.endTime,
      attendees: this.eventForm.value.attendees?.map(
        (obj: any) => obj.attendeesName
      ),
    };
    console.log(result);
  }
  
  //find id by putEvent(event.id, event.date, event.start, event.end) in template
  updateEvent(eventID:any, eventDate:string, eventStart:string, eventEnd:string){
    this.updateParameters.eventId = eventID
    this.updateParameters.eventDate = eventDate
    this.updateParameters.eventStart = eventStart
    this.updateParameters.eventEnd = eventEnd
    console.log(this.updateParameters)
  }
  putEvent(){
    //give updateParameters to PUT method service
    if (this.updatedEventForm.valid) {
      const result = this.updatedEventForm.value.updatedAttendees?.map((obj: any) => obj.name);
      //result as request body
      console.log(result);
    } else {
      this.updatedEventForm.markAllAsTouched();
    }
  
  }
  //find id by deleteEvent(event.id) in template
  deleteEvent(id:any){
    
  }
}
