import { TestBed } from '@angular/core/testing';

import { SigService } from './sig.service';

describe('SigService', () => {
  let service: SigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
