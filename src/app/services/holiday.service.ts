import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  private mockHolidays: any[] = [];

  constructor() {
    this.generateMockHolidays();
  }

  private generateMockHolidays() {
    this.mockHolidays = Array.from({ length: 10 }, () => ({
      name: faker.lorem.words(2),
      date: faker.date.future(),
    }));
  }
  //GET Holiday
  getHolidays(): Observable<any[]> {
    const event = new Date('2023-09-08');
    console.log(event.toUTCString());

    return of(this.mockHolidays);
  }
  //POST Holiday
  createHoliday(newHoliday: any): Observable<any> {
    const existingHoliday = this.mockHolidays.find(
      (h) => h.date === newHoliday.date
    );

    if (existingHoliday) {
      return of(null);
    } else {
      this.mockHolidays.push(newHoliday);
      return of(newHoliday);
    }
  }
  //DELETE Holiday
  deleteHoliday(date: string): Observable<any> {
    const index = this.mockHolidays.findIndex((h) => h.date === date);

    if (index !== -1) {
      const deletedHoliday = this.mockHolidays.splice(index, 1)[0];
      return of(deletedHoliday);
    } else {
      return of(null);
    }
  }
  //first need toggle to form, then change them
  //PUT Holiday
  updateHoliday(updatedHoliday: any): Observable<any> {
    const index = this.mockHolidays.findIndex(
      (h) => h.date === updatedHoliday.date
    );

    if (index !== -1) {
      this.mockHolidays[index].name = updatedHoliday.name;
      return of(this.mockHolidays[index]);
    } else {
      return of(null);
    }
  }
}
