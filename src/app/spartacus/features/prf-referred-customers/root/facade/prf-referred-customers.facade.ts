import { Injectable } from '@angular/core';
import { facadeFactory, QueryState } from '@spartacus/core';
import { PRF_REFERRED_CUSTOMERS_CORE_FEATURE } from '../feature-name';
import { Observable } from 'rxjs';
import { PrfReferredCustomerModel } from '../models';

@Injectable({
  providedIn: 'root',
  useFactory: () =>
    facadeFactory({
      facade: PrfReferredCustomersFacade,
      feature: PRF_REFERRED_CUSTOMERS_CORE_FEATURE,
      methods: ['getReferredCustomers', 'getReferredCustomersState', 'deleteReferredCustomer', 'editReferredCustomer'],
    }),
})
export abstract class PrfReferredCustomersFacade {
  /**
   * Returns the checkout details state.
   */
  abstract getReferredCustomers(): Observable<PrfReferredCustomerModel[]>;

  abstract getReferredCustomersState(): Observable<QueryState<PrfReferredCustomerModel[]>>;

  abstract deleteReferredCustomer(email: string): void;

  abstract createReferredCustomer(referredCustomer: PrfReferredCustomerModel): void;

  abstract editReferredCustomer(referredCustomer: PrfReferredCustomerModel): void;
}
