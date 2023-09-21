import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLKComponent } from './header-lk.component';

describe('HeaderLKComponent', () => {
  let component: HeaderLKComponent;
  let fixture: ComponentFixture<HeaderLKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
