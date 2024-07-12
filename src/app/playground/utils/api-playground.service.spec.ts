import { TestBed } from '@angular/core/testing';

import { ApiPlaygroundService } from './api-playground.service';

describe('ApiPlaygroundService', () => {
  let service: ApiPlaygroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPlaygroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
