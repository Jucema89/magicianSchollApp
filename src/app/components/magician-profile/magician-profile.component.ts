import { Component, Input, OnInit} from '@angular/core';
import { Magician } from '../../core/models/magician.model';
declare var $: any;


@Component({
  selector: 'app-magician-profile',
  templateUrl: './magician-profile.component.html',
  styleUrls: ['./magician-profile.component.scss']
})
export class MagicianProfileComponent implements OnInit {
  @Input() magician: Magician;
  sendMagician: Magician;
  constructor() { }

  ngOnInit(): void {
  }
  clearSpace(value: string): string {
    let linteText = / /gi; 
    let lineNew = value.replace(linteText, "-"); 
    return lineNew;
  }
  viewFullProfile(magician) {
    const mag = this.clearSpace(magician.name);
    console.log(mag);
    $('#' + mag).modal('show');
    // console.log(magician);
  }
}
