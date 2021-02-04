import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MagicianProfileComponent } from './components/magician-profile/magician-profile.component';
import { MagicHouseComponent } from './components/magic-house/magic-house.component';
import { SearchingComponent } from './components/searching/searching.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { HousePipe } from './shared/pipes/housefilter.pipe';
import { ClearSpaces } from './shared/pipes/clearSpaces.pipe';

import { SearchingPipe } from './shared/pipes/searching.pipe';
import { CountHousePipe } from './shared/pipes/count-house.pipe';
import { StaffComponent } from './components/staff/staff.component';
import { CountMagiciansPipe } from './shared/pipes/count-magicians.pipe';
import { CounterMagiciansComponent } from './components/counter-magicians/counter-magicians.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'house/:id', component: MagicHouseComponent },
  { path: 'staff', component: StaffComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent,
    MagicianProfileComponent,
    MagicHouseComponent,
    SearchingComponent,
    MainPageComponent,
    HousePipe,
    ClearSpaces,
    SearchingPipe,
    CountHousePipe,
    StaffComponent,
    CountMagiciansPipe,
    CounterMagiciansComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
