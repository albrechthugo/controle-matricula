import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FormaDeIngresso } from 'src/app/entities/aluno/forma-ingresso/ingresso.enum';

import { AlunosGetAllService } from './alunos-get-all.service';

describe('O serviço AlunosGetAllService', () => {
  let service: AlunosGetAllService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlunosGetAllService]
    });
    service = TestBed.inject(AlunosGetAllService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve recuperar todos os alunos', () => {
    const alunosResponseMock = [
      {
        id: 1,
        nome: 'Hugo',
        cpf: '123.456.789-00',
        email: 'hugo@teste.com',
        formaDeIngresso: FormaDeIngresso.ENADE,
        matricula: 123456,
        turma: null
      },
      {
        id: 2,
        nome: 'Jose',
        cpf: '123.456.789-00',
        email: 'jose@teste.com',
        formaDeIngresso: FormaDeIngresso.ENADE,
        matricula: 123123,
        turma: null
      },
      {
        id: 3,
        nome: 'Israel',
        cpf: '123.456.789-00',
        email: 'aaa@teste.com',
        formaDeIngresso: FormaDeIngresso.ENADE,
        matricula: 123123,
        turma: null
      },
      {
        id: 4,
        nome: 'Marcos',
        cpf: '123.456.789-00',
        email: 'joaase@teste.com',
        formaDeIngresso: FormaDeIngresso.ENADE,
        matricula: 123123,
        turma: null
      }
    ];

    service.getAllAlunos()
      .subscribe(response => {
        expect(response.length).toEqual(4);
        expect(response[0].nome).toEqual('Hugo');
        expect(response[1].nome).toEqual('Jose');
        expect(response[2].nome).toEqual('Israel');
        expect(response[3].nome).toEqual('Marcos');
      });

    const req = httpMock.expectOne(req => {
      return req.method === 'GET' && req.url === 'api/alunos';
    });

    req.flush(alunosResponseMock);
  });

});
