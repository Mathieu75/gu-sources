import { TestBed, inject } from '@angular/core/testing';

import { FormStatesService } from './form-states.service';

describe('FormStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormStatesService]
    });
  });

  it('should ...', inject([FormStatesService], (service: FormStatesService) => {
    expect(service).toBeTruthy();
  }));
});
