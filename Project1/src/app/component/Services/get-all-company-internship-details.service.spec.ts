import { TestBed, inject } from '@angular/core/testing';

import { GetAllCompanyInternshipDetailsService } from './get-all-company-internship-details.service';

describe('GetAllCompanyInternshipDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllCompanyInternshipDetailsService]
    });
  });

  it('should be created', inject([GetAllCompanyInternshipDetailsService], (service: GetAllCompanyInternshipDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
