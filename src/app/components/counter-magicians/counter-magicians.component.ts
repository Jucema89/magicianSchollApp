import { Component, Input, OnInit } from '@angular/core';
import { ApiConectService } from '../../core/services/api-conect.service';

@Component({
  selector: 'app-counter-magicians',
  templateUrl: './counter-magicians.component.html',
  styleUrls: ['./counter-magicians.component.scss']
})
export class CounterMagiciansComponent implements OnInit {
  
  @Input() house: string;
  @Input() itsHouse: boolean
  constructor(
    private api: ApiConectService,
  ) {}
  counter: number;
  ngOnInit(): void {
    this.getNumber()
  }
  getNumber(){
    if (this.itsHouse === true) {
      this.api.getHouse(this.house).subscribe(magicians => this.counter = magicians.length);
    } else {
      this.api.getAllTeachers().subscribe(magicians => this.counter = magicians.length);
    }
    
  }

}
