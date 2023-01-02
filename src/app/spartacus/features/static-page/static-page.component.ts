import { Component, OnInit } from '@angular/core';
import { Product, ProductSearchPage, ProductSearchService, RoutingService } from '@spartacus/core';
import { filter, map, pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss'],
})
export class StaticPageComponent {
  constructor(private routingService: RoutingService, private productSearchService: ProductSearchService) {}

  hasProductAttribute(searchResult: ProductSearchPage) {
    return searchResult.hasOwnProperty('products');
  }

  mapToRandomProducts(products: Product[] | undefined) {
    if (products?.length) {
      const randomIndex = Math.floor(Math.random() * products.length);
      return products[randomIndex];
    }
    return null;
  }

  goToRandomProduct() {
    this.productSearchService.search('cam');
    this.productSearchService
      .getResults()
      .pipe(
        filter(this.hasProductAttribute),
        pluck('products'),
        map(this.mapToRandomProducts),
        tap((product) => {
          if (product) {
            this.routingService.go({
              cxRoute: 'product',
              params: { code: product.code, nameForUrl: product.nameForUrl },
            });
          }
        })
      )
      .subscribe();
  }
}
