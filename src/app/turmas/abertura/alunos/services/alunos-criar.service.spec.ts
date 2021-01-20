import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { FormaDeIngresso } from 'src/app/entities/aluno/forma-ingresso/ingresso.enum';

import { AlunosCriarService } from './alunos-criar.service';

describe('O serviço AlunosCriarService', () => {
  let service: AlunosCriarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosCriarService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AlunosCriarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve criar um aluno', () => {
    const alunoMock: Aluno = {
      nome: 'Hugo',
      cpf: '123.456.789-00',
      email: 'hugo@teste.com',
      formaIngresso: FormaDeIngresso.ENADE,
      matricula: 123456,
      turma: {
        id: 1,
        descricao: 'Veteranos',
        anoLetivo: 2020,
        periodoLetivo: 2,
        numeroVagas: 40,
        alunos: [],
        disciplinas: []
      }
    };

    service.criarAluno(alunoMock)
      .subscribe(response => {
        expect(response.nome).toEqual('Hugo');
        expect(response.cpf).toEqual('123.456.789-00');
        expect(response.email).toEqual('hugo@teste.com');
        expect(response.formaIngresso).toEqual(FormaDeIngresso.ENADE);
        expect(response.matricula).toEqual(123456);
        expect(response.turma.id).toEqual(1);
        expect(response.turma.descricao).toEqual('Veteranos');
        expect(response.turma.anoLetivo).toEqual(2020);
        expect(response.turma.numeroVagas).toEqual(40);
        expect(response.turma.periodoLetivo).toEqual(2);
        expect(response.turma.alunos).toEqual([]);
        expect(response.turma.disciplinas).toEqual([]);
      });

    const req = httpMock.expectOne(req => {
      return req.method === 'POST' && req.url === 'api/alunos';
    });

    req.flush(alunoMock);
  });


});
