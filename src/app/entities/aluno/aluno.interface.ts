import { Pessoa } from '../pessoa/pessoa.interface';
import { FormaDeIngresso } from '../aluno/forma-ingresso/ingresso.enum';
import {Turma} from '../turma/turma.interface';

export interface Aluno extends Pessoa {
  id?: number,
  matricula: number,
  formaIngresso: FormaDeIngresso,
  turma?: Turma;
}
