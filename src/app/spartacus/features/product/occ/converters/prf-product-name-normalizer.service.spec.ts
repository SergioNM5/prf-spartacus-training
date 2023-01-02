import { TestBed } from '@angular/core/testing';

import { PrfProductNameNormalizerService } from './prf-product-name-normalizer.service';

describe('PrfProductNameNormalizerService', () => {
  let service: PrfProductNameNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrfProductNameNormalizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
