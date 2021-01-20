import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Turma } from 'src/app/entities/turma/turma.interface';

import { TurmaCriarService } from './turma-criar.service';

describe('O serviço TurmaCriarService', () => {
  let service: TurmaCriarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurmaCriarService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TurmaCriarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve criar uma turma ', () => {
    const turmaMock: Turma = {
      descricao: 'Veteranos',
      anoLetivo: 2020,
      numeroVagas: 40,
      periodoLetivo: 2,
      alunos: [],
      disciplinas: []
    };

    service.abrirTurma(turmaMock)
      .subscribe(response => {
        expect(response.descricao).toEqual('Veteranos');
        expect(response.anoLetivo).toEqual(2020);
        expect(response.numeroVagas).toEqual(40);
        expect(response.periodoLetivo).toEqual(2);
        expect(response.alunos).toEqual([]);
        expect(response.disciplinas).toEqual([]);
      });

    const req = httpMock.expectOne(req => {
      return req.method === 'POST' && req.url === 'api/turmas';
    });

    req.flush(turmaMock);
  });
});
