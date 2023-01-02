import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import augmentations
import './models';
import { provideConfig } from '@spartacus/core';
import { PrfOccReferredCustomersEndpoint } from './config/prf-occ-referred-customers-endpoint';
import { PrfReferredCustomersAdapter } from '../core/connectors/prf-referred-customers.adapter';
import { PrfOccReferredCustomersAdapter } from './adapters/prf-occ-referred-customers.adapter';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig(PrfOccReferredCustomersEndpoint),
    {
      provide: PrfReferredCustomersAdapter,
      useClass: PrfOccReferredCustomersAdapter,
    },
  ],
})
export class PrfReferredCustomersOccModule {}
