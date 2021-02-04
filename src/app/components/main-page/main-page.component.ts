import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../core/services/api-conect.service';
import { Magician } from '../../core/models/magician.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageComponent implements OnInit {
  allMagicians = new BehaviorSubject<Magician[]>([]);
  searchMagician = new BehaviorSubject<Magician[]>([]);
  houseMagician = new BehaviorSubject<Magician[]>([]);
 
  constructor(
    private api: ApiConectService
  ) { }

  ngOnInit(): void {
    this.fetchAllMagicians();
  }

  fetchAllMagicians() {
    this.api.getAllMagicians()
    .subscribe(magicians => this.allMagicians.next(magicians));
  }
  handleSearch(search){
    this.searchMagician.next(search.searching);
    // if(search) {
    //   this.invisibleHouses('invisible');
    // } else if(!search) {
    //   this.invisibleHouses('visible');
    // }
  }
  invisibleHouses(data){
    switch (data) {
      case 'visibe':
        document.getElementById('magicHouse').classList.remove('d-none');
        break;
        case 'invisibe':
          document.getElementById('magicHouse').classList.add('d-none');
          break;
    }
    
  }
}
