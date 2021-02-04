import { Pipe, PipeTransform } from '@angular/core';
import { Magician } from '../../core/models/magician.model';

@Pipe({
  name: 'countHouse'
})
export class CountHousePipe implements PipeTransform {

  transform(list: Magician[], house: string): Magician[] {
    return  list.filter(magician => magician.house.includes(house));
  }

}
