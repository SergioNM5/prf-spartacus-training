import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { PrfSplitViewBannerComponent } from './prf-split-view-banner.component';
import { MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [PrfSplitViewBannerComponent],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        TcSplitViewBannerComponent: {
          component: PrfSplitViewBannerComponent,
        },
      },
    }),
  ],
  exports: [PrfSplitViewBannerComponent],
})
export class PrfSplitViewBannerModule {}
