import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule, IconModule, IconTestingModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { RouterModule } from '@angular/router';
import { StaticPageComponent } from './spartacus/features/static-page/static-page.component';
import { UrlModule } from '@spartacus/core';

@NgModule({
  declarations: [AppComponent, StaticPageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserTransferStateModule,
    IconModule,
    CustomRoutingModule,
    RouterModule,
    UrlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
