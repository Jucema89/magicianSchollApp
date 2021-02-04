import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'clearSpaces'
})
export class ClearSpaces implements PipeTransform {

    transform(value: string): string {
        let linteText = / /gi; 
        let lineNew = value.replace(linteText, "-"); 
        return lineNew;
      }

}