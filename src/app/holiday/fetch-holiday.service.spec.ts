import { TestBed } from '@angular/core/testing';

import { FetchHolidayService } from './fetch-holiday.service';

describe('FetchHolidayService', () => {
  let service: FetchHolidayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchHolidayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
