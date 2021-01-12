import { Aluno } from "../aluno/aluno.interface";
import { Disciplina } from "../disciplina/disciplina.interface";

export interface Turma {
  id?: number,
  descricao: string,
  anoLetivo: number,
  periodoLetivo: number,
  numeroVagas: number,
  disciplinas?: Disciplina[];
  alunos?: Aluno[]
}
