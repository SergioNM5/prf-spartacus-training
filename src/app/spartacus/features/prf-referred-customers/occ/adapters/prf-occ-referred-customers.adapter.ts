import { PrfReferredCustomersAdapter } from '../../core/connectors/prf-referred-customers.adapter';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PrfReferredCustomerModel } from '../../root';
import { ConverterService, OccEndpointsService } from '@spartacus/core';
import { catchError, pluck } from 'rxjs/operators';
import {
  PRF_REFERRED_CUSTOMER_SERIALIZER,
  PRF_REFERRED_CUSTOMERS_NORMALIZER,
} from '../../core/connectors/prf-referred-customers.converters';

@Injectable()
export class PrfOccReferredCustomersAdapter implements PrfReferredCustomersAdapter {
  constructor(
    protected occEndpointService: OccEndpointsService,
    protected http: HttpClient,
    protected converter: ConverterService
  ) {}

  getReferredCustomersEndpoint(userId: string): string {
    return this.occEndpointService.buildUrl('getReferredCustomers', {
      urlParams: {
        userId,
      },
    });
  }

  deleteReferredCustomerEndpoint(userId: string, email: string): string {
    return this.occEndpointService.buildUrl('deleteReferredCustomer', {
      urlParams: {
        userId,
        email,
      },
    });
  }

  createReferredCustomerEndpoint(userId: string): string {
    return this.occEndpointService.buildUrl('createReferredCustomer', {
      urlParams: {
        userId,
      },
    });
  }

  editReferredCustomerEndpoint(userId: string, email: string): string {
    return this.occEndpointService.buildUrl('editReferredCustomer', {
      urlParams: {
        userId,
        email,
      },
    });
  }

  getReferredCustomers(userId: string): Observable<PrfReferredCustomerModel[]> {
    return this.http
      .get<any>(this.getReferredCustomersEndpoint(userId))
      .pipe(pluck('referredCustomers'), this.converter.pipeableMany(PRF_REFERRED_CUSTOMERS_NORMALIZER));
  }

  deleteReferredCustomer(userId: string, email: string): Observable<unknown> {
    return this.http.delete(this.deleteReferredCustomerEndpoint(userId, email));
  }

  createReferredCustomer(userId: string, referredCustomer: PrfReferredCustomerModel): Observable<unknown> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    referredCustomer = this.converter.convert(referredCustomer, PRF_REFERRED_CUSTOMER_SERIALIZER);
    return this.http
      .post(this.createReferredCustomerEndpoint(userId), referredCustomer, { headers })
      .pipe(catchError((error: any) => throwError(error)));
  }

  editReferredCustomer(userId: string, referredCustomer: PrfReferredCustomerModel): Observable<unknown> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    referredCustomer = this.converter.convert(referredCustomer, PRF_REFERRED_CUSTOMER_SERIALIZER);
    return this.http
      .patch(this.editReferredCustomerEndpoint(userId, referredCustomer.email || ''), referredCustomer, { headers })
      .pipe(catchError((error: any) => throwError(error)));
  }
}
