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

// export const dbjsonProfessoresEditar: Array<DBJSON> = [
//   {
//     name: 'professoresEditar',
//     value: {
//       httpRequest: {
//         method: 'PUT',
//         path: `/professores/1`,
//         body: {
//           json: {
//               "id": 1,
//               "nome": "Hugo",
//               "cpf": "123.456.789-00",
//               "email": "hugo@teste.com",
//               "disciplinasMinistradas": [],
//               "titulacao": "PHD"
//           }
//         }
//       },
//       httpResponse: {
//         statusCode: 201,
//       }
//     }
//   },
// ];

export const dbjsonProfessoresEditar: IExpectation = {
  httpRequest: {
    method: 'PUT',
    path: `/professores/1`, },
  httpResponse: {
    statusCode: 201
  }
};
