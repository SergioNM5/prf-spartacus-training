import { Observable } from 'rxjs';
import { PrfReferredCustomerModel } from '../../root';

export abstract class PrfReferredCustomersAdapter {
  /**
   * Abstract method used to get referred customers
   *
   * @param userId
   */
  abstract getReferredCustomers(userId: string): Observable<PrfReferredCustomerModel[]>;

  /**
   * Abstract method used to delete a referred customer
   *
   * @param userId
   * @param email
   */
  abstract deleteReferredCustomer(userId: string, email: string): Observable<unknown>;

  /**
   * Abstract method used to create a referred customer
   *
   * @param userId
   * @param referredCustomer
   */
  abstract createReferredCustomer(userId: string, referredCustomer: PrfReferredCustomerModel): Observable<unknown>;

  /**
   * Abstract method used to create a referred customer
   *
   * @param userId
   * @param referredCustomer
   */
  abstract editReferredCustomer(userId: string, referredCustomer: PrfReferredCustomerModel): Observable<unknown>;
}
