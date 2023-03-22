import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any[], minPrice: number, maxPrice: number) {

    if (!minPrice || ! maxPrice) {
      console.log('no search');
      return value;
    }
    return value.filter( item => {
      const deviceName =  item.price > minPrice && item.price < maxPrice
      return ( deviceName )
    });
  }

}
