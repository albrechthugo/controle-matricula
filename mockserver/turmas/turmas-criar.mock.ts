export const turmas = '/turmas';
import { IExpectation } from '../utils/IExpectations';

export interface DBJSON {
  name: string;
  value: IExpectation;
}

export interface DBJSON {
  name: string;
  value: IExpectation;
}

export const dbjsonTurmasCriar: IExpectation = {
  httpRequest: {
    method: 'POST',
    path: `/turmas`, },
  httpResponse: {
    statusCode: 201
  }
};
