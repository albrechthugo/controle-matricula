import { TestBed } from '@angular/core/testing';

import { ProfessoresEditarService } from './professores-editar.service';

describe('ProfessoresEditarService', () => {
  let service: ProfessoresEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessoresEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
