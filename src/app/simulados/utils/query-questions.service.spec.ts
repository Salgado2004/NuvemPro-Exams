import { TestBed } from '@angular/core/testing';

import { QueryQuestionsService } from './query-questions.service';

describe('QueryQuestionsService', () => {
  let service: QueryQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
