import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLKComponent } from './footer-lk.component';

describe('FooterLKComponent', () => {
  let component: FooterLKComponent;
  let fixture: ComponentFixture<FooterLKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
