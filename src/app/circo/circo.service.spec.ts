import { TestBed, inject } from '@angular/core/testing';

import { CircoService } from './circo.service';

describe('CircoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircoService]
    });
  });

  it('should ...', inject([CircoService], (service: CircoService) => {
    expect(service).toBeTruthy();
  }));
});
