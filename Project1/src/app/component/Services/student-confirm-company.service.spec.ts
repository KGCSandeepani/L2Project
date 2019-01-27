import { TestBed, inject } from '@angular/core/testing';

import { StudentConfirmCompanyService } from './student-confirm-company.service';

describe('StudentConfirmCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentConfirmCompanyService]
    });
  });

  it('should be created', inject([StudentConfirmCompanyService], (service: StudentConfirmCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
