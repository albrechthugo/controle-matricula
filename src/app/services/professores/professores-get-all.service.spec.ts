import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Titulacao } from 'src/app/entities/professor/titulacao/titulacao.enum';
import { ProfessoresGetAllService } from './professores-get-all.service';

describe('O serviço ProfessoresGetAllService', () => {
  let service: ProfessoresGetAllService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfessoresGetAllService]
    });
    service = TestBed.inject(ProfessoresGetAllService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve recuperar todos os professores', () => {
    const professorResponseMock = [
      {
        id: 1,
        nome: 'Hugo',
        cpf: '123.456.789-00',
        email: 'hugo@teste.com',
        titulacao: Titulacao.MESTRE,
        disciplinasMinistradas: []
      },
      {
        id: 2,
        nome: 'Sofia',
        cpf: '126.356.289-06',
        email: 'sofia@teste.com',
        titulacao: Titulacao.MESTRE,
        disciplinasMinistradas: []
      },
      {
        id: 3,
        nome: 'Jose',
        cpf: '153.456.783-10',
        email: 'jose@teste.com',
        titulacao: Titulacao.DOUTOR,
        disciplinasMinistradas: []
      },
      {
        id: 4,
        nome: 'Marcos',
        cpf: '111.222.777-00',
        email: 'marcos@teste.com',
        titulacao: Titulacao.PHD,
        disciplinasMinistradas: []
      }
    ];

    service.getAllProfessores()
      .subscribe(response => {
        expect(response.length).toEqual(4);
        expect(response[0].nome).toEqual('Hugo');
        expect(response[1].nome).toEqual('Sofia');
        expect(response[2].nome).toEqual('Jose');
        expect(response[3].nome).toEqual('Marcos');
      });

    const req = httpMock.expectOne(req => {
      return (req.method === 'GET' && req.url === 'api/professores');
    });

    req.flush(professorResponseMock);
  });

});
