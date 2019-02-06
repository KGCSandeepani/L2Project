import { TestBed, inject } from '@angular/core/testing';

import { AdminChangePasswordService } from './admin-change-password.service';

describe('AdminChangePasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminChangePasswordService]
    });
  });

  it('should be created', inject([AdminChangePasswordService], (service: AdminChangePasswordService) => {
    expect(service).toBeTruthy();
  }));
});
