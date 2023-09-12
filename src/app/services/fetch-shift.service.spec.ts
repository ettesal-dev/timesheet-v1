import { TestBed } from '@angular/core/testing';

import { FetchShiftService } from './fetch-shift.service';

describe('FetchShiftService', () => {
  let service: FetchShiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchShiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
