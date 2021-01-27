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
    return $('po-select[formControlName="professor"]');
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
    return $('po-button[p-label="Adicionar professor"]');
  }

  get buttonAdicionarDisciplina(): ElementFinder {
    return $('po-button[p-label="Adicionar disciplina"]');
  }

  get buttonCriarDisciplinaModal(): ElementFinder {
    // return $('po-button[p-label="Criar nova disciplina"]');
    return $('#criarNovaDisciplinaModal');
  }

  get buttonCriarProfessorModal(): ElementFinder {
    return $('po-button[p-label="Incluir novo professor"]');
  }

  get buttonAvancarParaAlunos(): ElementFinder {
    return $('po-button[id="passo2Avancar"]')
  }

  get buttonRetornarParaInfosBasicas(): ElementFinder {
    return $('po-button[p-label="Voltar"]')
  }

  // Passo 3 - Alunos

  get selectAlunos(): ElementFinder {
    return $('po-multiselect[p-label="Selecione os alunos abaixo:"]');
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
    return $('po-number[name="matricula"]')
  }

  get selectFormaIngresso(): ElementFinder {
    return $('po-select[name="formaIngresso"]')
  }

  get buttonAdicionarAluno(): ElementFinder {
    return $('po-button[p-label="Adicionar"]')
  }

  get buttonRetornarParaDisciplinas(): ElementFinder {
    return $('po-button[class="btn-previous"]');
  }

  get buttonConcluirAbertura(): ElementFinder {
    return $('po-button[p-label="Concluir"]');
  }

  get buttonCriarAlunoModal(): ElementFinder {
    return $('po-button[p-label]="Incluir novo aluno"')
  }
}
