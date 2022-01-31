import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, search: any, amount: any): any {

    if (search == undefined && amount == undefined) {
      return products;
    }else if (search != undefined && amount == undefined ) {
      return products.filter((product: Product) => product.name.toLowerCase().includes(search.toLowerCase()));
    }else if ((search == undefined && amount != undefined )) {
     return products.filter((product: Product) => product.price < amount);
    }else {
      return products.filter((product: Product) => product.name.toLowerCase().includes(search.toLowerCase()) && product.price < amount);
    }
  }

}
