import { TestBed } from '@angular/core/testing';

import { FetchUserShiftsService } from './fetch-user-shifts.service';

describe('FetchUserShiftsService', () => {
  let service: FetchUserShiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUserShiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
