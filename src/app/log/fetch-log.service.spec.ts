import { TestBed } from '@angular/core/testing';

import { FetchLogService } from './fetch-log.service';

describe('FetchLogService', () => {
  let service: FetchLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
