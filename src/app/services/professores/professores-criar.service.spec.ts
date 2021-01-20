import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Professor } from 'src/app/entities/professor/professor.interface';
import { Titulacao } from 'src/app/entities/professor/titulacao/titulacao.enum';

import { ProfessoresCriarService } from './professores-criar.service';

describe('O serviço ProfessoresCriarService', () => {
  let service: ProfessoresCriarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfessoresCriarService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProfessoresCriarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve criar um professor', () => {
    const professorMock: Professor = {
      nome: 'Hugo',
      cpf: '123.456.789-00',
      email: 'hugo@teste.com',
      titulacao: Titulacao.MESTRE,
      disciplinasMinistradas: [],
    };

    service.criarProfessor(professorMock)
      .subscribe(response => {
        expect(response.nome).toEqual('Hugo');
        expect(response.cpf).toEqual('123.456.789-00');
        expect(response.email).toEqual('hugo@teste.com');
        expect(response.titulacao).toEqual(Titulacao.MESTRE);
        expect(response.disciplinasMinistradas).toEqual([]);
      });

    const req = httpMock.expectOne(req => {
      return req.method === 'POST' && req.url === 'api/professores';
    });

    req.flush(professorMock);
  });
});
