import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class PrfProductCategoryNormalizerService implements Converter<Occ.Product, Product> {
  constructor() {}

  convert(source: Occ.Product, target: Product): Product {
    if (source.categories && source.categories[0].name) {
      target.firstCategory = source.categories[0].name.replace(/ /g, '-').toLowerCase();
    }
    return target;
  }
}
