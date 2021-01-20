import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DisciplinaGetAllService } from './disciplina-get-all.service';

describe('O serviço DisciplinaGetAllService', () => {
  let service: DisciplinaGetAllService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DisciplinaGetAllService]
    });
    service = TestBed.inject(DisciplinaGetAllService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser instaciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve recuperar todas as disciplinas', () => {
    const disciplinaResponseMock = [
      {
        id: 1,
        descricao: 'Algoritmos',
        sigla: 'AGT',
        cargaHoraria: 20,
        professor: null
      },
      {
        id: 2,
        descricao: 'TGS',
        sigla: 'Teoria dos Sistemas',
        cargaHoraria: 40,
        professor: null
      }
    ];

    service.getAllDisciplinas()
      .subscribe(response => {
        expect(response.length).toEqual(2);
        expect(response[0].id).toEqual(1);
        expect(response[1].id).toEqual(2);
      });

    const req = httpMock.expectOne(req => {
      return req.method === 'GET' && req.url === 'api/disciplinas';
    });

    req.flush(disciplinaResponseMock);
  });
});
