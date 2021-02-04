import { Pipe, PipeTransform } from '@angular/core';
import { ApiConectService } from '../../core/services/api-conect.service';

@Pipe({
  name: 'countMagicians'
})
export class CountMagiciansPipe implements PipeTransform {
  private api: ApiConectService
  transform(house: string,): number {
    let counter: number;
    this.api.getHouse(house).subscribe(magicians => counter = magicians.length)
    return counter;
  }

}
