import { TestBed } from '@angular/core/testing';

import { DisciplinasGetAllResolver } from './disciplinas-get-all.resolver';

xdescribe('DisciplinasGetAllResolver', () => {
  let resolver: DisciplinasGetAllResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DisciplinasGetAllResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
