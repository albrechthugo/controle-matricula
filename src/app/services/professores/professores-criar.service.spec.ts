import { TestBed } from '@angular/core/testing';

import { ProfessoresCriarService } from './professores-criar.service';

describe('ProfessoresCriarService', () => {
  let service: ProfessoresCriarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessoresCriarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
