import { TestBed, inject } from '@angular/core/testing';

import { AdminUpdateStudentService } from './admin-update-student.service';

describe('AdminUpdateStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUpdateStudentService]
    });
  });

  it('should be created', inject([AdminUpdateStudentService], (service: AdminUpdateStudentService) => {
    expect(service).toBeTruthy();
  }));
});
