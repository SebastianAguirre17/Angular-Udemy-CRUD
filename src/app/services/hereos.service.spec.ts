import { TestBed } from '@angular/core/testing';

import { HereosService } from './hereos.service';

describe('HereosService', () => {
  let service: HereosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HereosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
