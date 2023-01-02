import { TestBed } from '@angular/core/testing';

import { PrfReferredCustomersService } from './prf-referred-customers.service';

describe('PrfReferredCustomersService', () => {
  let service: PrfReferredCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrfReferredCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
