import { TestBed } from '@angular/core/testing';

import { ProfessoresGetByIdService } from './professores-get-by-id.service';

describe('ProfessoresGetByIdService', () => {
  let service: ProfessoresGetByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessoresGetByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
