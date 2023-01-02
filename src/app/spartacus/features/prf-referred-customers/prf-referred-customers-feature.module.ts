import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrfReferredCustomersRootModule } from './root/prf-referred-customers-root.module';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { CHECKOUT_FEATURE } from '@spartacus/checkout/root';
import { PRF_REFERRED_CUSTOMERS_FEATURE } from './root/feature-name';

@NgModule({
  imports: [PrfReferredCustomersRootModule],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [PRF_REFERRED_CUSTOMERS_FEATURE]: {
          module: () => import('./prf-referred-customers.module').then((m) => m.PrfReferredCustomersModule),
        },
      },
    }),
  ],
})
export class PrfReferredCustomersFeatureModule {}
