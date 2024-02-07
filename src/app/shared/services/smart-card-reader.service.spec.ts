import { TestBed } from '@angular/core/testing';

import { SmartCardReaderService } from './smart-card-reader.service';

describe('SmartCardReaderService', () => {
  let service: SmartCardReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartCardReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
