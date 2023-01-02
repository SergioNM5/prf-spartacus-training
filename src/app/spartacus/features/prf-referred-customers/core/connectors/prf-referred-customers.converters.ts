import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { PrfReferredCustomerModel } from '../../root';

export const PRF_REFERRED_CUSTOMERS_NORMALIZER = new InjectionToken<Converter<any, PrfReferredCustomerModel>>(
  'PrfReferredCustomersNormalizer'
);

export const PRF_REFERRED_CUSTOMER_SERIALIZER = new InjectionToken<Converter<any, PrfReferredCustomerModel>>(
  'PrfReferredCustomerSerializer'
);
