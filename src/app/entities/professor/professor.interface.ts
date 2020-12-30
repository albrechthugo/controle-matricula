import { Pessoa } from '../pessoa/pessoa.interface';
import { Titulacao } from './titulacao/titulacao.enum';

export interface Professor extends Pessoa {
  id?: number,
  titulacao?: Titulacao
}