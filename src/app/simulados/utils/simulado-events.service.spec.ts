import { TestBed } from '@angular/core/testing';

import { SimuladoEventsService } from './simulado-events.service';

describe('SimuladoEventsService', () => {
  let service: SimuladoEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimuladoEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
