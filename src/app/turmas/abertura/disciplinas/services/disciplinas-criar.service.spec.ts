import { TestBed } from '@angular/core/testing';

import { DisciplinasCriarService } from './disciplinas-criar.service';

describe('DisciplinasCriarService', () => {
  let service: DisciplinasCriarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinasCriarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
