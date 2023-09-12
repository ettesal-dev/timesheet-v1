import { TestBed } from '@angular/core/testing';

import { FetchCalculateService } from './fetch-calculate.service';

describe('FetchCalculateService', () => {
  let service: FetchCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
