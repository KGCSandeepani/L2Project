import { TestBed, inject } from '@angular/core/testing';

import { StudentSelectedCompanyService } from './student-selected-company.service';

describe('StudentSelectedCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentSelectedCompanyService]
    });
  });

  it('should be created', inject([StudentSelectedCompanyService], (service: StudentSelectedCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
