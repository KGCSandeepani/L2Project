import { TestBed, inject } from '@angular/core/testing';

import { GetBatchOfStudentService } from './get-batch-of-student.service';

describe('GetBatchOfStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBatchOfStudentService]
    });
  });

  it('should be created', inject([GetBatchOfStudentService], (service: GetBatchOfStudentService) => {
    expect(service).toBeTruthy();
  }));
});
