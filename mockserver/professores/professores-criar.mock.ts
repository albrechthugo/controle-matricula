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

export const dbjsonProfessoresCriar: IExpectation = {
  httpRequest: {
    method: 'POST',
    path: `/professores`, },
  httpResponse: {
    statusCode: 201
  }
};
