import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { ApiConectService } from '../../core/services/api-conect.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SearchingComponent implements OnInit {

  search: FormGroup;
  @Output('search')  searchEmitter = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiConectService
  ) {
    this.buildForm();
   }
   private buildForm() {
    this.search = this.formBuilder.group({
      searching: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(100)
    )
    .subscribe(value => this.searchEmitter.emit(value));
  }

  dNall(){
    document.getElementById('magicHouse').classList.add('d-none');
   // document.getElementById('allMagicians').classList.remove('d-none');
  }
  vieAll() {
    document.getElementById('magicHouse').classList.remove('d-none');
   // document.getElementById('allMagicians').classList.add('d-none');
  }

}
