export const alunos = '/alunos';
import { IExpectation } from '../utils/IExpectations';

export interface DBJSON {
  name: string;
  value: IExpectation;
}

export interface DBJSON {
  name: string;
  value: IExpectation;
}

export const dbjsonAlunosGetAll: Array<DBJSON> = [
  {
    name: 'alunosGetAll',
    value: {
      httpRequest: {
        method: 'GET',
        path: `/alunos`,
      },
      httpResponse: {
        statusCode: 201,
        body: JSON.stringify(
          [
            {
              cpf: '123.456.789-00',
              email: 'hugo@teste.com',
              nome: 'Hugo',
              formaIngresso: 'Vestibular',
              matricula: 123321,
              id: 1
            }
          ]
        )
      }
    }
  },
];
