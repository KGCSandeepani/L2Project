import { TestBed, inject } from '@angular/core/testing';

import { DataPassService } from './data-pass.service';

describe('DataPassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPassService]
    });
  });

  it('should be created', inject([DataPassService], (service: DataPassService) => {
    expect(service).toBeTruthy();
  }));
});
