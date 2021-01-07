import { TestBed } from '@angular/core/testing';

import { AlunosCriarService } from './alunos-criar.service';

describe('AlunosCriarService', () => {
  let service: AlunosCriarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunosCriarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
