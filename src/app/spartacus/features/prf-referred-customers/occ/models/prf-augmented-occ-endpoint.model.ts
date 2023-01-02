import '@spartacus/core';
import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  export interface OccEndpoints {
    getReferredCustomers?: string | OccEndpoint;
    deleteReferredCustomer?: string | OccEndpoint;
    createReferredCustomer?: string | OccEndpoint;
    editReferredCustomer?: string | OccEndpoint;
  }
}
