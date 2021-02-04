import { Pipe, PipeTransform } from '@angular/core';
import { Magician } from '../../core/models/magician.model';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(list: Magician[], searchText): Magician[] {
    if  (!searchText) return list;
    return list.filter(magician => magician.name.toUpperCase().includes(searchText.toUpperCase()))
  }

}
