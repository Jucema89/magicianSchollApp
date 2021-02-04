import { Component,  OnInit } from '@angular/core';
import { ApiConectService } from '../../core/services/api-conect.service';
import { Magician } from '../../core/models/magician.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-magic-house',
  templateUrl: './magic-house.component.html',
  styleUrls: ['./magic-house.component.scss']
})

export class MagicHouseComponent implements OnInit {

  houseStudents: Magician[];
  
  constructor(
    private api: ApiConectService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.api.getHouse(params.id).subscribe(magicians => this.houseStudents = magicians)
      console.log(params.id)
    })
  }

}
