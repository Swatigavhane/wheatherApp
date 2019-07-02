import { TestBed } from '@angular/core/testing';

import { ApiwheatherService } from './apiwheather.service';

describe('ApiwheatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiwheatherService = TestBed.get(ApiwheatherService);
    expect(service).toBeTruthy();
  });
});
