import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Titulacao } from 'src/app/entities/professor/titulacao/titulacao.enum';

import { ProfessoresGetByIdService } from './professores-get-by-id.service';

describe('O serviço ProfessoresGetByIdService', () => {
  let service: ProfessoresGetByIdService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfessoresGetByIdService]
    });
    service = TestBed.inject(ProfessoresGetByIdService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve recuperar um professor pelo id', () => {
    const professorByIdResponseMock = {
      id: 1,
      nome: 'Hugo',
      cpf: '123.456.789-00',
      email: 'hugo@teste.com',
      titulacao: Titulacao.MESTRE,
      disciplinasMinistradas: []
    };

    service.professorGetById(professorByIdResponseMock.id)
      .subscribe(response => {
        expect(response.id).toEqual(1);
        expect(response.nome).toEqual('Hugo');
        expect(response.cpf).toEqual('123.456.789-00');
        expect(response.email).toEqual('hugo@teste.com');
        expect(response.titulacao).toBe(Titulacao.MESTRE);
        expect(response.disciplinasMinistradas).toEqual([]);
      });

    const req = httpMock.expectOne((req) => {
      return (req.method === 'GET' && req.url === `api/professores/${professorByIdResponseMock.id}`);
    });

    req.flush(professorByIdResponseMock);
  });
});
