import { IExpectation } from './IExpectations';
import { mockMultipleResponseWithDefaultHeaders } from './mockServerClientUtil';

export class ContoleMatriculaDefaultDB {
  async initialize() {
    const expectations = this.mapExpetationsFromJs();
    await this.createExpetations(expectations);
  }

  private mapExpetationsFromJs() {
    const expetations: Array<IExpectation> = new Array<IExpectation>();

    return expetations;
  }

  private async createExpetations(expetations: Array<IExpectation>) {
    await mockMultipleResponseWithDefaultHeaders(expetations);
  }
}
