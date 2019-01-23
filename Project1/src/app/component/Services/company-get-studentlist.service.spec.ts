import { TestBed, inject } from '@angular/core/testing';

import { CompanyGetStudentlistService } from './company-get-studentlist.service';

describe('CompanyGetStudentlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyGetStudentlistService]
    });
  });

  it('should be created', inject([CompanyGetStudentlistService], (service: CompanyGetStudentlistService) => {
    expect(service).toBeTruthy();
  }));
});
