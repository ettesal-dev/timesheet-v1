import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class ShiftService {
  private mockShifts: any[] = [];
  private mockType1: any[] = [];
  private mockType2: any[] = [];

  constructor() {
    this.generateMockShifts();
    this.generateMockType1();
    this.generateMockType2();
  }
  private generateMockShifts() {
    this.mockShifts = Array.from({ length: 10 }, () => ({
      id: faker.number.int(),
      //based on days of a week
      days: Array.from({ length: 3 }, () =>
        faker.number.int({ min: 1, max: 7 })
      ),
      type: faker.number.int({ min: 1, max: 2 }),
      date: faker.date.future(),
      start: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      end: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      flex_time: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      permit_time: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int(
        { min: 0, max: 59 }
      )}`,
    }));
  }
  private generateMockType1() {
    this.mockType1 = Array.from({ length: 10 }, () => ({
      start: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      end: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      flex_time: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      //based on days of a week
      days: Array.from({ length: 3 }, () =>
        faker.number.int({ min: 1, max: 7 })
      ),

      permit_time: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int(
        { min: 0, max: 59 }
      )}`,
    }));
  }
  private generateMockType2() {
    this.mockType2 = Array.from({ length: 10 }, () => ({
      start: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      end: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      flex_time: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int({
        min: 0,
        max: 59,
      })}`,
      date: faker.date.future(),

      permit_time: `${faker.number.int({ min: 0, max: 23 })}:${faker.number.int(
        { min: 0, max: 59 }
      )}`,
    }));
  }

  //GET shifts
  //not used
  getShifts():Observable<any[]>{
    return of(this.mockShifts);
  }

  //not used
  //DELETE shifts
  deleteShifts(shift_id:number):Observable<any>{
    const index = this.mockShifts.findIndex((h) => h.id === shift_id);
    if (index !== -1) {
      const deleteShift = this.mockShifts.splice(index, 1)[0];
      return of(deleteShift);
    } else {
      return of(null);
    }
  }

  //GET users shifts
  
}
