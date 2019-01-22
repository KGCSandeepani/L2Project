import { TestBed, inject } from '@angular/core/testing';

import { CompanyUpdateInternshipService } from './company-update-internship.service';

describe('CompanyUpdateInternshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyUpdateInternshipService]
    });
  });

  it('should be created', inject([CompanyUpdateInternshipService], (service: CompanyUpdateInternshipService) => {
    expect(service).toBeTruthy();
  }));
});
