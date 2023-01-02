import { MediaConfig } from '@spartacus/storefront';

const pixelDensity = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
export const prfMediaConfig: MediaConfig = {
  mediaFormats: {
    mobile: { width: 400 * pixelDensity },
    tablet: { width: 770 * pixelDensity },
    desktop: { width: 1140 * pixelDensity },
    widescreen: { width: 1400 * pixelDensity },
    // product media
    cartIcon: { width: 65 },
    thumbnail: { width: 96 },
    product: { width: 284 },
    zoom: { width: 515 },
  },
};
