import { CmsComponent, Image, ImageGroup } from '@spartacus/core';
import { MediaContainer } from '@spartacus/storefront';

export interface PrfCmsReferredCustomersComponent extends CmsComponent {
  content?: string;
  media?: MediaContainer | Image | ImageGroup | ImageGroup[] | undefined;
  title?: string;
}
