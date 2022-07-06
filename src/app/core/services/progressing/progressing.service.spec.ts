import { TestBed } from '@angular/core/testing';

import { ProgressingService } from './progressing.service';

describe('ProgressingService', () => {
  let service: ProgressingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
