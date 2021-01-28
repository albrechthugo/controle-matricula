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

export const dbjsonDisciplinasCriar: IExpectation = {
  httpRequest: {
    method: 'POST',
    path: `/disciplinas`, },
  httpResponse: {
    statusCode: 201
  }
};
