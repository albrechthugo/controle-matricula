import { TestBed } from '@angular/core/testing';

import { TurmaCriarService } from './turma-criar.service';

describe('TurmaCriarService', () => {
  let service: TurmaCriarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmaCriarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
