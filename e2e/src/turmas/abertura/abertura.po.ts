import { $, browser, ElementFinder } from 'protractor';

export class AberturaPage {

  navigateTo() {
    return browser.get(`${browser.baseUrl}#/turmas/abertura`);
  }

  verifyUrl() {
    return browser.getCurrentUrl();
  }

  // Passo 1 - Informações Básicas

  get inputDescricaoTurma(): ElementFinder {
    return $('#descricaoTurma input');
  }

  get inputAnoLetivo(): ElementFinder {
    return $('#anoLetivo input');
  }

  get inputPeriodoLetivo(): ElementFinder {
    return $('#periodoLetivo input');
  }

  get inputNumeroVagas(): ElementFinder {
    return $('#numeroVagas input');
  }

  get botaoProximo(): ElementFinder {
    return $('#passo1Avancar');
  }
}
