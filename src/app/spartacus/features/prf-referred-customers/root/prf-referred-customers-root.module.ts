import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { prfReferredCustomersLayoutConfig } from './config/prf-referred-customers-layout-config';
import { PRF_REFERRED_CUSTOMERS_CORE_FEATURE, PRF_REFERRED_CUSTOMERS_FEATURE } from './feature-name';
import { PrfReferredCustomersEventModule } from './events/prf-referred-customer-events.module';
import { prfReferredCustomerTranslationChunksConfig } from './config';

export const PRF_REFERRED_CUSTOMERS_CMS_COMPONENTS: string[] = ['AccountReferredCustomersComponent'];

const config: CmsConfig = {
  featureModules: {
    [PRF_REFERRED_CUSTOMERS_FEATURE]: {
      cmsComponents: PRF_REFERRED_CUSTOMERS_CMS_COMPONENTS,
    },
    //by default core is bundled together with components
    [PRF_REFERRED_CUSTOMERS_CORE_FEATURE]: PRF_REFERRED_CUSTOMERS_FEATURE,
  },
};

@NgModule({
  declarations: [],
  providers: [
    provideConfig(prfReferredCustomersLayoutConfig),
    provideConfig(config),
    provideConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: prfReferredCustomerTranslationChunksConfig,
      },
    }),
  ],
  imports: [PrfReferredCustomersEventModule],
})
export class PrfReferredCustomersRootModule {}
