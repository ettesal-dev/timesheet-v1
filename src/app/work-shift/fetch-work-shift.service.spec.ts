import { TestBed } from '@angular/core/testing';

import { FetchWorkShiftService } from './fetch-work-shift.service';

describe('FetchWorkShiftService', () => {
  let service: FetchWorkShiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchWorkShiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
