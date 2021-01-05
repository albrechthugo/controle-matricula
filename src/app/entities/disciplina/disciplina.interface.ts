import { Professor } from "../professor/professor.interface";

export interface Disciplina {
  id?: number,
  descricao: string,
  sigla: string,
  cargaHoraria: number,
  professor: Professor;
}