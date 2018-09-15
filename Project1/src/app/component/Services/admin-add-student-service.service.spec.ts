import { TestBed, inject } from '@angular/core/testing';

import { AdminAddStudentServiceService } from './admin-add-student-service.service';

describe('AdminAddStudentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAddStudentServiceService]
    });
  });

  it('should be created', inject([AdminAddStudentServiceService], (service: AdminAddStudentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
