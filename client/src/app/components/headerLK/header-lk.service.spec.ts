import { TestBed } from '@angular/core/testing';

import { HeaderLKService } from './header-lk.service';

describe('HeaderLKService', () => {
  let service: HeaderLKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderLKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
