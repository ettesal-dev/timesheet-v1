import { TestBed } from '@angular/core/testing';

import { FetchUserShiftService } from './fetch-user-shift.service';

describe('FetchUserShiftService', () => {
  let service: FetchUserShiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUserShiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
