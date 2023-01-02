import { IconConfig, IconResourceType } from '@spartacus/storefront';
import { PRF_ICON_TYPE } from '../spartacus/models/icons.model';

export const PrfIconConfig: IconConfig = {
  icon: {
    symbols: {
      LAB: 'icon-lab',
    },
    resources: [
      {
        type: IconResourceType.SVG,
        url: './assets/icons/icons-sprite.svg',
        types: [PRF_ICON_TYPE.LAB],
      },
      {
        type: IconResourceType.LINK,
        url: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
      },
    ],
  },
};
