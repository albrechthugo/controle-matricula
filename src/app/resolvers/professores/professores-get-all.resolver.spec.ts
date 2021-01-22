import { TestBed } from '@angular/core/testing';

import { ProfessoresGetAllResolver } from './professores-get-all.resolver';

xdescribe('ProfessoresGetAllResolver', () => {
  let resolver: ProfessoresGetAllResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfessoresGetAllResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
