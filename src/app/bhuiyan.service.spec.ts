import { TestBed } from '@angular/core/testing';

import { BhuiyanService } from './bhuiyan.service';

describe('BhuiyanService', () => {
  let service: BhuiyanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BhuiyanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
