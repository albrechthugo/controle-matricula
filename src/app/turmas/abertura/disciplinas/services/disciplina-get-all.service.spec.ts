import { TestBed } from '@angular/core/testing';

import { DisciplinaGetAllService } from './disciplina-get-all.service';

describe('DisciplinaGetAllService', () => {
  let service: DisciplinaGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinaGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
