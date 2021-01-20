import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DisciplinasCriarService } from './disciplinas-criar.service';

describe('O serviço DisciplinasCriarService', () => {
  let service: DisciplinasCriarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DisciplinasCriarService]
    });
    service = TestBed.inject(DisciplinasCriarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve criar uma disciplina', () => {
    const disciplinaMock = {
      id: 1,
      descricao: 'Algoritmos',
      sigla: 'AGT',
      cargaHoraria: 20,
      professor: null
    };

    service.criarDisciplina(disciplinaMock)
      .subscribe(response => {
        expect(response.id).toEqual(1);
        expect(response.descricao).toEqual('Algoritmos');
      });

    const req = httpMock.expectOne(req => {
      return req.method === 'POST' && req.url === 'api/disciplinas';
    });

    req.flush(disciplinaMock);
  });
});
