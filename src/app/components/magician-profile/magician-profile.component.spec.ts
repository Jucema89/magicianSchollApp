import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicianProfileComponent } from './magician-profile.component';

describe('MagicianProfileComponent', () => {
  let component: MagicianProfileComponent;
  let fixture: ComponentFixture<MagicianProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicianProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicianProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
