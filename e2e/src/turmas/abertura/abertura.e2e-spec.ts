import { browser } from 'protractor';
import { AberturaPage } from './abertura.po';

describe('A página de Abertura de Turmas', () => {
  let aberturaPage: AberturaPage;

  beforeEach(async () => {
    aberturaPage = new AberturaPage();
    await aberturaPage.navigateTo();
  });

  // Passo 1

  it('deve realizar todos os passos para a abertura de uma turma', async () => {
    expect(await aberturaPage.verifyUrl()).toBe('http://localhost:4200/#/turmas/abertura');
    expect(await aberturaPage.botaoProximo.isPresent()).toBeTruthy();
    await aberturaPage.inputDescricaoTurma.sendKeys('Algoritmos');
    await aberturaPage.inputAnoLetivo.sendKeys(2021);
    await aberturaPage.inputPeriodoLetivo.sendKeys(2);
    await aberturaPage.inputNumeroVagas.sendKeys(40);
    await aberturaPage.botaoProximo.click();

    expect(await aberturaPage.selectDisciplinas.isPresent()).toBeTruthy();
    expect(await aberturaPage.buttonAvancarParaAlunos.isPresent()).toBeTruthy();
    expect(await aberturaPage.buttonRetornarParaInfosBasicas.isPresent()).toBeTruthy();
    await aberturaPage.selectDisciplinas.click();
    await aberturaPage.selectDisciplinasValue.click();
    await aberturaPage.buttonAvancarParaAlunos.click();

    // expect(await aberturaPage.buttonCriarDisciplinaModal.isPresent()).toBeTruthy();
    // expect(await aberturaPage.buttonCriarProfessorModal.isPresent()).toBeTruthy();
    // expect(await aberturaPage.buttonAdicionarDisciplina.isPresent()).toBeTruthy();
    // expect(await aberturaPage.buttonAdicionarProfessor.isPresent()).toBeTruthy();
    // await aberturaPage.buttonCriarDisciplinaModal.click();
    // await aberturaPage.inputSigla.sendKeys('AGT');
    // await aberturaPage.inputDescricaoDisciplina.sendKeys('Algoritmos');
    // await aberturaPage.inputCargaHoraria.sendKeys(20);
  });

});
