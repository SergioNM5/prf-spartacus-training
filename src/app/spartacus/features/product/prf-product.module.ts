import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig } from '@spartacus/core';
import { prfProductRoutingConfig } from './occ/config/prf-product-routing.config';
import { PrfProductOccModule } from './occ/prf-product-occ.module';
import './model';

@NgModule({
  declarations: [],
  imports: [PrfProductOccModule],
})
export class PrfProductModule {}
