import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicHouseComponent } from './magic-house.component';

describe('MagicHouseComponent', () => {
  let component: MagicHouseComponent;
  let fixture: ComponentFixture<MagicHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
