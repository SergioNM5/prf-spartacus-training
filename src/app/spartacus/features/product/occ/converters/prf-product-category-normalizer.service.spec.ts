import { TestBed } from '@angular/core/testing';

import { PrfProductCategoryNormalizerService } from './prf-product-category-normalizer.service';

describe('PrfProductCategoryNormalizerService', () => {
  let service: PrfProductCategoryNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrfProductCategoryNormalizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
