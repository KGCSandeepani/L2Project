import { TestBed, inject } from '@angular/core/testing';

import { AdminRejectTempCompanyService } from './admin-reject-temp-company.service';

describe('AdminRejectTempCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminRejectTempCompanyService]
    });
  });

  it('should be created', inject([AdminRejectTempCompanyService], (service: AdminRejectTempCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
