import { browser } from 'protractor';
import { AberturaPage } from './abertura.po';
import { mockResponseWithDefaultHeaders } from '../../../../mockserver/utils/mockServerClientUtil';
import { dbjsonProfessoresCriar } from '../../../../mockserver/professores/professores-criar.mock';
import { dbjsonProfessoresEditar } from '../../../../mockserver/professores/professores-editar.mock';
import { dbjsonDisciplinasCriar } from '../../../../mockserver/disciplinas/disciplinas-criar.mock';
import { dbjsonAlunosCriar } from '../../../../mockserver/alunos/alunos-criar.mock';
import { dbjsonTurmasCriar } from '../../../../mockserver/turmas/turmas-criar.mock';

describe('A página de Abertura de Turmas', () => {
  let aberturaPage: AberturaPage;

  beforeEach(async () => {
    aberturaPage = new AberturaPage();
    await aberturaPage.navigateTo();
  });

  it('deve realizar todos os passos para a abertura de uma turma', async () => {
    await mockResponseWithDefaultHeaders(dbjsonProfessoresCriar.httpRequest, dbjsonProfessoresCriar.httpResponse);
    await mockResponseWithDefaultHeaders(dbjsonProfessoresEditar.httpRequest, dbjsonProfessoresEditar.httpResponse);
    await mockResponseWithDefaultHeaders(dbjsonDisciplinasCriar.httpRequest, dbjsonDisciplinasCriar.httpResponse);
    await mockResponseWithDefaultHeaders(dbjsonAlunosCriar.httpRequest, dbjsonAlunosCriar.httpResponse);
    await mockResponseWithDefaultHeaders(dbjsonTurmasCriar.httpRequest, dbjsonTurmasCriar.httpResponse);
    await browser.sleep(7000);

    expect(await aberturaPage.verifyUrl()).toContain('/turmas/abertura');
    expect(await aberturaPage.botaoProximo.isPresent()).toBeTruthy();
    await aberturaPage.inputDescricaoTurma.sendKeys('Algoritmos');
    await aberturaPage.inputAnoLetivo.sendKeys(2021);
    await aberturaPage.inputPeriodoLetivo.sendKeys(2);
    await aberturaPage.inputNumeroVagas.sendKeys(40);
    await aberturaPage.botaoProximo.click();

    expect(await aberturaPage.selectDisciplinas.isPresent()).toBeTruthy();
    expect(await aberturaPage.buttonAvancarParaAlunos.isPresent()).toBeTruthy();
    expect(await aberturaPage.buttonRetornarParaInfosBasicas.isPresent()).toBeTruthy();
    expect(await aberturaPage.buttonCriarDisciplinaModal.isPresent()).toBeTruthy();

    await aberturaPage.buttonCriarDisciplinaModal.click();
    expect(await aberturaPage.buttonCriarProfessorModal.isPresent()).toBeTruthy();
    expect(await aberturaPage.buttonAdicionarDisciplina.isPresent()).toBeTruthy();
    await aberturaPage.inputSigla.sendKeys('AGT');
    await aberturaPage.inputDescricaoDisciplina.sendKeys('Algoritmos');
    await aberturaPage.inputCargaHoraria.sendKeys(20);


    await aberturaPage.buttonCriarProfessorModal.click();
    expect(await aberturaPage.buttonAdicionarProfessor.isPresent()).toBeTruthy();
    expect(await aberturaPage.buttonFecharProfessorModal.isPresent()).toBeTruthy();
    await aberturaPage.inputNomeProfessor.sendKeys('AgroPesca Jacaré');
    await aberturaPage.inputEmailProfessor.sendKeys('agropesca@jacare.com');
    await aberturaPage.inputCpfProfessor.sendKeys('123.456.789-00');
    await aberturaPage.buttonAdicionarProfessor.click();
    await aberturaPage.buttonFecharProfessorModal.click();

    await aberturaPage.selectProfessor.click();
    await aberturaPage.selectProfessorValue.click();
    await aberturaPage.buttonAdicionarDisciplina.click();

    await aberturaPage.selectDisciplinas.click();
    await aberturaPage.selectDisciplinasValue.click();
    await aberturaPage.buttonAvancarParaAlunos.click();

    expect(await aberturaPage.buttonConcluirAbertura.isPresent()).toBeTruthy();
    expect(await aberturaPage.buttonCriarAlunoModal.isPresent()).toBeTruthy();
    await aberturaPage.buttonCriarAlunoModal.click();
    expect(await aberturaPage.buttonAdicionarAluno.isPresent()).toBeTruthy();
    await aberturaPage.inputNomeAluno.sendKeys('Saveiro');
    await aberturaPage.inputEmailAluno.sendKeys('saveiro@dafiat.com');
    await aberturaPage.inputCpfAluno.sendKeys('123.456.789-00');
    await aberturaPage.inputMatriculaAluno.sendKeys(123456);
    await aberturaPage.selectFormaIngresso.click();
    await aberturaPage.selectFormaIngressoValue.click();
    await aberturaPage.buttonAdicionarAluno.click();
    await aberturaPage.selectAlunos.click();
    await aberturaPage.selectAlunosValue.click();
    await aberturaPage.buttonConcluirAbertura.click();

    await browser.sleep(3000)
  });

});
