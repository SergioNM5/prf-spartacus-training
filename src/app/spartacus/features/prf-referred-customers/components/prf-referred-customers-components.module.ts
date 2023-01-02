import { NgModule } from '@angular/core';
import { CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { PrfReferredCustomersListComponent } from './prf-referred-customers-list/prf-referred-customers-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule, FormErrorsModule, SpinnerModule } from '@spartacus/storefront';
import { NgSelectModule } from '@ng-select/ng-select';
import { PrfReferredCustomersComponent } from './prf-referred-customers/prf-referred-customers.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PrfReferredCustomersListComponent, PrfReferredCustomersComponent],
  entryComponents: [PrfReferredCustomersListComponent, PrfReferredCustomersComponent],
  exports: [PrfReferredCustomersListComponent, PrfReferredCustomersComponent],
  imports: [ReactiveFormsModule, FormErrorsModule, NgSelectModule, CommonModule, SpinnerModule, CardModule, I18nModule],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        AccountReferredCustomersComponent: {
          component: PrfReferredCustomersListComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class PrfReferredCustomersComponentsModule {}
