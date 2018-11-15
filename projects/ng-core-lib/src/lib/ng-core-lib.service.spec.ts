import { TestBed, inject } from '@angular/core/testing';

import { NgCoreLibService } from './ng-core-lib.service';

describe('NgCoreLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgCoreLibService]
    });
  });

  it('should be created', inject([NgCoreLibService], (service: NgCoreLibService) => {
    expect(service).toBeTruthy();
  }));
});
