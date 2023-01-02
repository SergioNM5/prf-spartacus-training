import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../spartacus/features/static-page/static-page.component';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';

const STATIC_ROUTES: Routes = [
  {
    path: 'static-page',
    component: StaticPageComponent,
    canActivate: [CmsPageGuard],
    data: {
      pageLabel: 'sale',
    },
  },
  {
    path: 'alias/faq',
    component: PageLayoutComponent,
    canActivate: [CmsPageGuard],
    data: {
      pageLabel: 'faq',
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(STATIC_ROUTES)],
})
export class CustomRoutingModule {}
