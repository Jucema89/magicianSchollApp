import { Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../core/services/api-conect.service';
import { Magician } from '../../core/models/magician.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffGroup: Magician[];
  
  constructor(
    private api: ApiConectService,
  ) { }

  ngOnInit(): void {
    this.api.getAllTeachers().subscribe(staff => this.staffGroup = staff);
  }

}
