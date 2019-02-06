import { TestBed, inject } from '@angular/core/testing';

import { AdminDeleteCompanyService } from './admin-delete-company.service';

describe('AdminDeleteCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDeleteCompanyService]
    });
  });

  it('should be created', inject([AdminDeleteCompanyService], (service: AdminDeleteCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
