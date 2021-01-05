import { TestBed } from '@angular/core/testing';

import { AlunosGetAllService } from './alunos-get-all.service';

describe('AlunosGetAllService', () => {
  let service: AlunosGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunosGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
