import '@spartacus/core';

declare module '@spartacus/core' {
  interface Product {
    nameForUrl?: string;
    firstCategory?: string;
  }
}
