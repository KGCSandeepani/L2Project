import { TestBed, inject } from '@angular/core/testing';

import { CompanyConfirmStudentService } from './company-confirm-student.service';

describe('CompanyConfirmStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyConfirmStudentService]
    });
  });

  it('should be created', inject([CompanyConfirmStudentService], (service: CompanyConfirmStudentService) => {
    expect(service).toBeTruthy();
  }));
});
