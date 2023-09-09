import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HolidayService } from 'src/app/services/holiday.service';


import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-work-logger',
  templateUrl: './work-logger.component.html',
  styleUrls: ['./work-logger.component.scss']
  
})
export class WorkLoggerComponent {
  holidays: any[] = [];
  dateHoliday: string = '';
  startDate: string = '';
  endDate: string = '';

  locale = 'en';
  locales = listLocales();

  constructor(public holiday: HolidayService, private localeService: BsLocaleService) {
    this.getHolidays();
  }

  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }

  getDate(date: string) {
    this.dateHoliday = date;
    console.log(this.dateHoliday);
  }

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  date = new FormControl('', [Validators.required]);
  updateName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  updateDate = new FormControl('', [Validators.required]);
  holidayForm = new FormGroup({
    name: this.name,
    date: this.date,
  });
  holidayUpdateForm = new FormGroup({
    updateName: this.updateName,
    updateDate: this.updateDate,
  });

  getHolidays() {
    const startDate = new Date('2023-12-01');
    const endDate = undefined;

    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;
    this.holiday.getHolidays(start, end).subscribe((data) => {
      this.holidays = data;

      console.log(this.holidays);
      console.log(data);
    });
  }
  postHoliday() {
    this.holiday.createHoliday(this.holidayForm.value);
    this.holidayForm.reset();
  }
  putHoliday() {
    this.holiday.updateHoliday(this.holidayUpdateForm.value, this.dateHoliday);
  }
}
