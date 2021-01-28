export const professores = '/professores';
import { IExpectation } from '../utils/IExpectations';

export interface DBJSON {
  name: string;
  value: IExpectation;
}

export interface DBJSON {
  name: string;
  value: IExpectation;
}

export const dbjsonProfessoresGetById: Array<DBJSON> = [
  {
    name: 'professoresGetById',
    value: {
      httpRequest: {
        method: 'GET',
        path: `/professores/1`,
      },
      httpResponse: {
        statusCode: 201,
        body: JSON.stringify(
          {
            id: 1,
            nome: 'Hugo',
            cpf: '123.456.789-00',
            email: 'hugo@teste.com',
            disciplinasMinistradas: [],
            titulacao: 'PHD'
          }
        )
      }
    }
  },
];
