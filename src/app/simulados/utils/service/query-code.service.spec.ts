import { TestBed } from '@angular/core/testing';

import { QueryCodeService } from './query-code.service';

describe('QueryCodeService', () => {
  let service: QueryCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
