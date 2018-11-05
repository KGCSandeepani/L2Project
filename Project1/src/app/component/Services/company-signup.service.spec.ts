import { TestBed, inject } from '@angular/core/testing';

import { CompanySignupService } from './company-signup.service';

describe('CompanySignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanySignupService]
    });
  });

  it('should be created', inject([CompanySignupService], (service: CompanySignupService) => {
    expect(service).toBeTruthy();
  }));
});
