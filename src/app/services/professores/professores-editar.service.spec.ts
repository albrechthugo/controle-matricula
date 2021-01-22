import { TestBed } from '@angular/core/testing';

import { ProfessoresEditarService } from './professores-editar.service';

xdescribe('ProfessoresEditarService', () => {
  let service: ProfessoresEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessoresEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
