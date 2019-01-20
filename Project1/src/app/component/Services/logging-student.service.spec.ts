import { TestBed, inject } from '@angular/core/testing';

import { LoggingStudentService } from './logging-student.service';

describe('LoggingStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggingStudentService]
    });
  });

  it('should be created', inject([LoggingStudentService], (service: LoggingStudentService) => {
    expect(service).toBeTruthy();
  }));
});
