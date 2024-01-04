import { TestBed } from '@angular/core/testing';

import { ActivAdminService } from './activ-admin.service';

describe('ActivAdminService', () => {
  let service: ActivAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
