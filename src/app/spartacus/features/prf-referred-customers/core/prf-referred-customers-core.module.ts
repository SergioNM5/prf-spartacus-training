import { NgModule } from '@angular/core';
import { facadeProviders } from './facade/facade-providers';
import { PrfReferredCustomersConnector } from './connectors/prf-referred-customers.connector';

@NgModule({
  providers: [...facadeProviders, PrfReferredCustomersConnector],
})
export class PrfReferredCustomersCoreModule {}
