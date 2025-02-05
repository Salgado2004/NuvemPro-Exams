import { TestBed } from '@angular/core/testing';

import { OctokitService } from './octokit.service';

describe('OctokitService', () => {
  let service: OctokitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OctokitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
