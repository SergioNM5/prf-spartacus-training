import { OccConfig } from '@spartacus/core';

export const PrfOccReferredCustomersEndpoint: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        getReferredCustomers: '/users/${userId}/referredcustomers',
        deleteReferredCustomer: '/users/${userId}/referredcustomers/${email}',
        createReferredCustomer: '/users/${userId}/referredcustomers',
        editReferredCustomer: '/users/${userId}/referredcustomers/${email}',
      },
    },
  },
};
