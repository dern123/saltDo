import { TestBed } from '@angular/core/testing';

import { NavbarLKService } from './navbar-lk.service';

describe('NavbarLKService', () => {
  let service: NavbarLKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarLKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
