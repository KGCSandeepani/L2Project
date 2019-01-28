import { TestBed, inject } from '@angular/core/testing';

import { LoggingSupervisorServiceService } from './logging-supervisor-service.service';

describe('LoggingSupervisorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggingSupervisorServiceService]
    });
  });

  it('should be created', inject([LoggingSupervisorServiceService], (service: LoggingSupervisorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
