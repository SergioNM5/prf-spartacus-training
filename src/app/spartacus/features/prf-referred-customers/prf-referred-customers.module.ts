import { NgModule } from '@angular/core';
import { PrfReferredCustomersComponentsModule } from './components/prf-referred-customers-components.module';
import { PrfReferredCustomersCoreModule } from './core/prf-referred-customers-core.module';
import { PrfReferredCustomersOccModule } from './occ/prf-referred-customers-occ.module';
import { PrfReferredCustomersRootModule } from './root/prf-referred-customers-root.module';

@NgModule({
  declarations: [],
  imports: [
    PrfReferredCustomersComponentsModule,
    PrfReferredCustomersCoreModule,
    PrfReferredCustomersOccModule,
    PrfReferredCustomersRootModule,
  ],
})
export class PrfReferredCustomersModule {}
