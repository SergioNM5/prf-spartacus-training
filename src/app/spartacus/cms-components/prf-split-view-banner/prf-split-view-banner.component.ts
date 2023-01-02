import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { PrfCmsReferredCustomersComponent } from '../../models/prf-cms-model';

@Component({
  selector: 'prf-split-view-banner',
  templateUrl: './prf-split-view-banner.component.html',
  styleUrls: ['./prf-split-view-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrfSplitViewBannerComponent {
  data$ = this.cmsComponentData.data$;

  constructor(protected cmsComponentData: CmsComponentData<PrfCmsReferredCustomersComponent>) {}
}
