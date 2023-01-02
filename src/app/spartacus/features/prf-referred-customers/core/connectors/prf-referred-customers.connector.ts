import { Observable } from 'rxjs';
import { PrfReferredCustomerModel } from '../../root';
import { Injectable } from '@angular/core';
import { PrfReferredCustomersAdapter } from './prf-referred-customers.adapter';

@Injectable()
export class PrfReferredCustomersConnector {
  constructor(protected adapter: PrfReferredCustomersAdapter) {}

  public getReferredCustomers(userId: string): Observable<PrfReferredCustomerModel[]> {
    return this.adapter.getReferredCustomers(userId);
  }

  public deleteReferredCustomer(userId: string, email: string): Observable<unknown> {
    return this.adapter.deleteReferredCustomer(userId, email);
  }

  public createReferredCustomer(userId: string, referredCustomer: PrfReferredCustomerModel): Observable<unknown> {
    return this.adapter.createReferredCustomer(userId, referredCustomer);
  }

  public editReferredCustomer(userId: string, referredCustomer: PrfReferredCustomerModel): Observable<unknown> {
    return this.adapter.editReferredCustomer(userId, referredCustomer);
  }
}
