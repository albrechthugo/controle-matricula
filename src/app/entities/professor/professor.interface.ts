import { Pessoa } from '../pessoa/pessoa.interface';
import { Titulacao } from './titulacao/titulacao.enum';
import { Disciplina } from '../disciplina/disciplina.interface';

export interface Professor extends Pessoa {
  id?: number,
  titulacao?: Titulacao,
  disciplinasMinistradas: Disciplina[];
}