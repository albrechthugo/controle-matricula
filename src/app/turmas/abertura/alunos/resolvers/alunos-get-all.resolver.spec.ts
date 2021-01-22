import { TestBed } from '@angular/core/testing';

import { AlunosGetAllResolver } from './alunos-get-all.resolver';

xdescribe('AlunosGetAllResolver', () => {
  let resolver: AlunosGetAllResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlunosGetAllResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
