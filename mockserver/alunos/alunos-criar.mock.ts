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

export const dbjsonAlunosCriar: IExpectation = {
  httpRequest: {
    method: 'POST',
    path: `/alunos`, },
  httpResponse: {
    statusCode: 201
  }
};
