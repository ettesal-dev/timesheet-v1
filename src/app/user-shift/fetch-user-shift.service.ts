import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchUserShiftService {
  visible:boolean = false
  //get user shift id as an input ID for PUT method
  shiftId:string | undefined = ''
  userId:string | undefined = ''

  toggleLiveDemo(userId?:string,id?:string) {
    this.visible = !this.visible;
    this.shiftId = id
    this.userId = userId
    //console.log(this.shiftId)
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  constructor() { }
}
