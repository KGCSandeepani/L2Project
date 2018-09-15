import { TestBed, inject } from '@angular/core/testing';

import { AdminDeleteStudentServiceService } from './admin-delete-student-service.service';

describe('AdminDeleteStudentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDeleteStudentServiceService]
    });
  });

  it('should be created', inject([AdminDeleteStudentServiceService], (service: AdminDeleteStudentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
