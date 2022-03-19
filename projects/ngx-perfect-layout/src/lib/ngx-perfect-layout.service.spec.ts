import { TestBed } from '@angular/core/testing';

import { NgxPerfectLayoutService } from './ngx-perfect-layout.service';

describe('NgxPerfectLayoutService', () => {
  let service: NgxPerfectLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPerfectLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
