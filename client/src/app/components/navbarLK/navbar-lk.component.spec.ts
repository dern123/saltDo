import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLKComponent } from './navbar-lk.component';

describe('NavbarLKComponent', () => {
  let component: NavbarLKComponent;
  let fixture: ComponentFixture<NavbarLKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
