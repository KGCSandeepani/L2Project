import { TestBed, inject } from '@angular/core/testing';

import { CompanyUpdatePasswordService } from './company-update-password.service';

describe('CompanyUpdatePasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyUpdatePasswordService]
    });
  });

  it('should be created', inject([CompanyUpdatePasswordService], (service: CompanyUpdatePasswordService) => {
    expect(service).toBeTruthy();
  }));
});
