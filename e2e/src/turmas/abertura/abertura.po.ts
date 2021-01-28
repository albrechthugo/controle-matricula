import { $$ ,$, browser, ElementFinder } from 'protractor';

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
    return $('po-button[id="passo1Avancar"]');
  }

  // Passo 2 - Disciplinas

  get selectDisciplinas(): ElementFinder {
    return $('po-multiselect[name="disciplinas"] .po-clickable');
  }

  get selectDisciplinasValue(): ElementFinder {
    return $$('.po-multiselect-items-container .po-multiselect-item').get(0);
  }

  get inputSigla(): ElementFinder {
    return $('#sigla input');
  }

  get inputDescricaoDisciplina(): ElementFinder {
    return $('#descricaoDisciplina input');
  }

  get inputCargaHoraria(): ElementFinder {
    return $('#cargaHoraria input');
  }

  get selectProfessor(): ElementFinder {
    return $('#selectProfessor')
  }

  get selectProfessorValue(): ElementFinder {
    return $$('.po-select-content .po-select-item').get(0);
  }

  get inputNomeProfessor(): ElementFinder {
    return $('#nomeProfessor input');
  }

  get inputEmailProfessor(): ElementFinder {
    return $('#emailProfessor input');
  }

  get inputCpfProfessor(): ElementFinder {
    return $('#cpfProfessor input');
  }

  get buttonAdicionarProfessor(): ElementFinder {
    return $('#adicionarProfessorButton button');
  }

  get buttonFecharProfessorModal(): ElementFinder {
    return $$('.po-button.po-text-ellipsis.po-button-primary').get(1);
  }

  get buttonAdicionarDisciplina(): ElementFinder {
    return $('#adicionarDisciplinaButton button');
  }

  get buttonCriarDisciplinaModal(): ElementFinder {
    return $('#criarNovaDisciplinaModal');
  }

  get buttonCriarProfessorModal(): ElementFinder {
    return $('po-button[p-label="Incluir novo professor"] .po-clickable');
  }

  get buttonAvancarParaAlunos(): ElementFinder {
    return $('#passo2Avancar')
  }

  get buttonRetornarParaInfosBasicas(): ElementFinder {
    return $('po-button[p-label="Voltar"]')
  }

  // Passo 3 - Alunos

  get selectAlunos(): ElementFinder {
    return $('po-multiselect[p-label="Selecione os alunos abaixo:"] .po-clickable');
  }

  get selectAlunosValue(): ElementFinder {
    return $$('.po-multiselect-items-container .po-multiselect-item').get(1);
  }

  get inputNomeAluno(): ElementFinder {
    return $('#nomeAluno input');
  }

  get inputEmailAluno(): ElementFinder {
    return $('#emailAluno input');
  }

  get inputCpfAluno(): ElementFinder {
    return $('#cpfAluno input');
  }

  get inputMatriculaAluno(): ElementFinder {
    return $('#matriculaAluno input')
  }

  get selectFormaIngresso(): ElementFinder {
    return $('#formaIngresso')
  }

  get selectFormaIngressoValue(): ElementFinder {
    return $$('.po-select-content .po-select-item').get(0);
  }

  get buttonAdicionarAluno(): ElementFinder {
    return $('#criarAlunoButton button')
  }

  get buttonRetornarParaDisciplinas(): ElementFinder {
    return $('#retornarParaPasso2');
  }

  get buttonConcluirAbertura(): ElementFinder {
    return $('#concluirAbertura');
  }

  get buttonCriarAlunoModal(): ElementFinder {
    return $('#criarAlunoModal')
  }
}
