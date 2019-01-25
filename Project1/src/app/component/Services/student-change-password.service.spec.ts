import { TestBed, inject } from '@angular/core/testing';

import { StudentChangePasswordService } from './student-change-password.service';

describe('StudentChangePasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentChangePasswordService]
    });
  });

  it('should be created', inject([StudentChangePasswordService], (service: StudentChangePasswordService) => {
    expect(service).toBeTruthy();
  }));
});
