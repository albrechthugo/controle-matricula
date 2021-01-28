import { dbjsonAlunosGetAll } from '../alunos/alunos-get-all.mock';
import { dbjsonDisciplinasGetAll } from '../disciplinas/disciplinas-get-all.mock';
import { dbjsonProfessoresGetAll } from '../professores/professores-get-all.mock';
import { dbjsonProfessoresGetById } from '../professores/professores.getBy-id';
import { IExpectation } from './IExpectations';
import { mockMultipleResponseWithDefaultHeaders } from './mockServerClientUtil';

export class ContoleMatriculaDefaultDB {
  async initialize() {
    const expectations = this.mapExpetationsFromJs();
    await this.createExpetations(expectations);
  }

  private mapExpetationsFromJs() {
    const expetations: Array<IExpectation> = new Array<IExpectation>();

    dbjsonAlunosGetAll.forEach(item => {
      expetations.push(item.value);
    });

    dbjsonDisciplinasGetAll.forEach(item => {
      expetations.push(item.value);
    });

    dbjsonProfessoresGetAll.forEach(item => {
      expetations.push(item.value);
    });

    dbjsonProfessoresGetById.forEach(item => {
      expetations.push(item.value);
    });

    return expetations;
  }

  private async createExpetations(expetations: Array<IExpectation>) {
    await mockMultipleResponseWithDefaultHeaders(expetations);
  }
}
