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
  // getHolidays(): Observable<any[]> {
  //   const event = new Date('2023-09-08');
  //   console.log(event.toUTCString());

  //   return of(this.mockHolidays);
  // }
  getHolidays(start?: any, end?: any): Observable<any[]> {
    // Filter the mockHolidays array to include only holidays within the specified date range
    const filteredHolidays = this.mockHolidays.filter((holiday) => {
      const holidayDate = new Date(holiday.date);
      return (!start || holidayDate >= start) && (!end || holidayDate <= end);
    });
  
    return of(filteredHolidays);
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

  //PUT Holiday
  updateHoliday(updatedHoliday: any, date: string): Observable<any> {
    const index = this.mockHolidays.findIndex((h) => h.date === date);

    if (index !== -1) {
      this.mockHolidays[index].name = updatedHoliday.updateName;
      this.mockHolidays[index].date = updatedHoliday.updateDate;

      return of(this.mockHolidays[index]);
    } else {
      return of(null);
    }
  }
}
