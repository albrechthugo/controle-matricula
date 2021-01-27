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
          {
            hasNext: true,
            items: [
              {
                id: '11c95af3d-39ac-4805-9e20-96f8d8307d9f',
                descricao: 'Carga de uvas roxas',
                excluido: false
              }
            ] as any[]
          }
        )
      }
    }
  },
];