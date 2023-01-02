import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from '@spartacus/storefront';
import { environment } from '../../environments/environment';
import { PrfIconConfig } from '../config/icon.config';
import { prfLayoutConfig } from '../config/layout.config';
import { prfMediaConfig } from '../config/media.config';
import { prfPWAModuleConfig } from '../config/pwa.config';

const occConfig: OccConfig = {
  backend: {
    occ: {
      ...(environment.occBaseUrl ? { baseUrl: environment.occBaseUrl } : {}),
      prefix: environment.prefix ? environment.prefix : '/occ/v2',
    },
  },
};

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(prfLayoutConfig),
    provideConfig(prfMediaConfig),
    provideConfig(prfPWAModuleConfig),
    ...defaultCmsContentProviders,
    provideConfig(occConfig),
    provideConfig(PrfIconConfig),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['taloscommerce'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
