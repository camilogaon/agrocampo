import { TestBed } from '@angular/core/testing';

import { NavbarVisibilityServiceService } from './navbar-visibility-service.service';

describe('NavbarVisibilityServiceService', () => {
  let service: NavbarVisibilityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarVisibilityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
