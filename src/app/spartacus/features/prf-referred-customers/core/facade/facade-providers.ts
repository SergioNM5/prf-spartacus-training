import { Provider } from '@angular/core';
import { PrfReferredCustomersFacade } from '../../root';
import { PrfReferredCustomersService } from './prf-referred-customers.service';

export const facadeProviders: Provider[] = [
  PrfReferredCustomersService,
  {
    provide: PrfReferredCustomersFacade,
    useExisting: PrfReferredCustomersService,
  },
];
