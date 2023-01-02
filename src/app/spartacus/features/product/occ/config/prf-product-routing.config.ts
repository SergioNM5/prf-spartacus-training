import { RoutingConfig } from '@spartacus/core';

export const prfProductRoutingConfig: RoutingConfig = {
  routing: {
    routes: {
      product: {
        paths: [
          'cameras/:firstCategory/:manufacturer/:productCode/:nameForUrl',
          'cameras/:manufacturer/:productCode/:nameForUrl',
          'cameras/:productCode/:nameForUrl',
          'cameras/:productCode',
        ],
        paramsMapping: { name: 'nameForUrl' },
      },
    },
  },
};
