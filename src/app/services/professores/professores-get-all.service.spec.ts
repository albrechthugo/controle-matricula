import { TestBed } from '@angular/core/testing';

import { ProfessoresGetAllService } from './professores-get-all.service';

describe('ProfessoresGetAllService', () => {
  let service: ProfessoresGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessoresGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
