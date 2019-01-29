import { TestBed, inject } from '@angular/core/testing';

import { GetOneCompanyInternshipDetailsService } from './get-one-company-internship-details.service';

describe('GetOneCompanyInternshipDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOneCompanyInternshipDetailsService]
    });
  });

  it('should be created', inject([GetOneCompanyInternshipDetailsService], (service: GetOneCompanyInternshipDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
