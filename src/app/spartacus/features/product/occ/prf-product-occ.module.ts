import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCT_NORMALIZER, provideConfig } from '@spartacus/core';
import { PrfProductNameNormalizerService } from './converters/prf-product-name-normalizer.service';
import { prfProductRoutingConfig } from './config/prf-product-routing.config';
import { prfProductEndpointConfig } from './config/prf-product-endpoint.config';
import { PrfProductCategoryNormalizerService } from './converters/prf-product-category-normalizer.service';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: PrfProductNameNormalizerService,
      multi: true,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: PrfProductCategoryNormalizerService,
      multi: true,
    },
    provideConfig(prfProductRoutingConfig),
    provideConfig(prfProductEndpointConfig),
  ],
})
export class PrfProductOccModule {}
