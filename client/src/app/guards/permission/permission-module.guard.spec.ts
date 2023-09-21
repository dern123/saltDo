import { TestBed } from '@angular/core/testing';

import { PermissionModuleGuard } from './permission-module.guard';

describe('PermissionModuleGuard', () => {
  let guard: PermissionModuleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionModuleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
