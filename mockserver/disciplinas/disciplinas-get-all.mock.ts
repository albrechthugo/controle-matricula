export const disciplinas = '/disciplinas';
import { IExpectation } from '../utils/IExpectations';

export interface DBJSON {
  name: string;
  value: IExpectation;
}

export interface DBJSON {
  name: string;
  value: IExpectation;
}

export const dbjsonDisciplinasGetAll: Array<DBJSON> = [
  {
    name: 'disciplinasGetAll',
    value: {
      httpRequest: {
        method: 'GET',
        path: `/disciplinas`,
      },
      httpResponse: {
        statusCode: 201,
        body: JSON.stringify([
          {
            id: 1,
            sigla: 'AGT',
            descricao: 'Algoritmos',
            cargaHoraria: 20,
            professor: {
              id: 1,
              nome: 'Hugo',
              cpf: '123.456.789-00',
              email: 'hugo@teste.com',
              disciplinasMinistradas: [],
              titulacao: 'Mestre'
            }
          }
        ]
        )
      }
    }
  },
];
