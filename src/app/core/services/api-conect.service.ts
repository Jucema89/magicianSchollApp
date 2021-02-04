import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Magician } from '../models/magician.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConectService {
  
  constructor(
    private http: HttpClient
  ) { }
   
  getAllMagicians() {
    return this.http.get<Magician[]>(`${environment.url_api}characters`)
  }
  getHouse(house: string) {
    return this.http.get<Magician[]>(`${environment.url_api}characters/house/` + house)
  }
  getAllTeachers() {
    return this.http.get<Magician[]>(`${environment.url_api}characters/staff`)
  }
  getAllStudents() {
    return this.http.get<Magician[]>(`${environment.url_api}characters/students`)
  }

}
