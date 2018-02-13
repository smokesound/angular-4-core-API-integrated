import { TestBed, inject } from '@angular/core/testing';

import { MapdetailService } from './mapdetail.service';

describe('MapdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapdetailService]
    });
  });

  it('should be created', inject([MapdetailService], (service: MapdetailService) => {
    expect(service).toBeTruthy();
  }));
});
