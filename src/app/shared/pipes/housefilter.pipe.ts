import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'housePipe',
})
export class HousePipe implements PipeTransform {   
    newSpan(classAsign) {
        return  `badge ` + classAsign ;
    }
  transform(house: string): string {
    let bgColor: string;
    switch (house) {
        case 'Gryffindor':
            bgColor = this.newSpan('bg-danger text-light');
            break;
        case 'Slytherin':
            bgColor = this.newSpan('bg-success text-light');
            break;
        case 'Hufflepuff':
            bgColor = this.newSpan('bg-warning text-dark');
            break;
        case 'Ravenclaw':
            bgColor = this.newSpan('bg-dark text-light');
            break;
        default:
            bgColor = this.newSpan('bg-secondary text-light');
            break;
    }
    return bgColor;
    
  }
}

