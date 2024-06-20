import { TestBed } from '@angular/core/testing';

import { QueryExamsService } from './query-exams.service';

describe('QueryExamsService', () => {
  let service: QueryExamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryExamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
