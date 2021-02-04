import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterMagiciansComponent } from './counter-magicians.component';

describe('CounterMagiciansComponent', () => {
  let component: CounterMagiciansComponent;
  let fixture: ComponentFixture<CounterMagiciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterMagiciansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterMagiciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
