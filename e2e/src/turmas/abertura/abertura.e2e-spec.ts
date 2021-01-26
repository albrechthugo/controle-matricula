import { browser } from 'protractor';
import { AberturaPage } from './abertura.po';

describe('A página de Abertura de Turmas', () => {
  let aberturaPage: AberturaPage;

  beforeEach(async () => {
    aberturaPage = new AberturaPage();
    await aberturaPage.navigateTo();
  });

  it('deve preencher o formulário de dados básicos e avançar para o próximo passo', async () => {
    // expect(await aberturaPage.verifyUrl()).toBe('http://localhost:4200/#/turmas/abertura');
    // expect(await aberturaPage.botaoProximo.isPresent()).toBeTruthy();
    await aberturaPage.inputDescricaoTurma.sendKeys('Algoritmos');
    await browser.sleep(50000);
    // await aberturaPage.inputAnoLetivo.sendKeys(2021);
    // await aberturaPage.inputPeriodoLetivo.sendKeys(2);
    // await aberturaPage.inputNumeroVagas.sendKeys(40);
  });

});
