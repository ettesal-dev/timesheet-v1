import { TestBed } from '@angular/core/testing';

import { FetchWorkShiftsService } from './fetch-work-shifts.service';

describe('FetchWorkShiftsService', () => {
  let service: FetchWorkShiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchWorkShiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
