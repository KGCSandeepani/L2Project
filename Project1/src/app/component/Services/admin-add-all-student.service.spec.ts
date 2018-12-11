import { TestBed, inject } from '@angular/core/testing';

import { AdminAddAllStudentService } from './admin-add-all-student.service';

describe('AdminAddAllStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAddAllStudentService]
    });
  });

  it('should be created', inject([AdminAddAllStudentService], (service: AdminAddAllStudentService) => {
    expect(service).toBeTruthy();
  }));
});
