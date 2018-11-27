import { TestBed, inject } from '@angular/core/testing';

import { AdminAcceptTempCompanyService } from './admin-accept-temp-company.service';

describe('AdminAcceptTempCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAcceptTempCompanyService]
    });
  });

  it('should be created', inject([AdminAcceptTempCompanyService], (service: AdminAcceptTempCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
