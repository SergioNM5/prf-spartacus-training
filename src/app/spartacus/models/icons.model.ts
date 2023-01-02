import { ICON_TYPE } from '@spartacus/storefront';

enum CUSTOM_ICON_TYPE {
  LAB = 'LAB',
}

export const PRF_ICON_TYPE = { ...ICON_TYPE, ...CUSTOM_ICON_TYPE };

export type PRF_ICON_TYPE = typeof PRF_ICON_TYPE;
