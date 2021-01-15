import { Pessoa } from '../pessoa/pessoa.interface';
import { DisciplinasMinistradas } from './disciplinas-ministradas/disciplinas-ministradas';
import { Titulacao } from './titulacao/titulacao.enum';

export interface Professor extends Pessoa {
  id?: number,
  titulacao?: Titulacao,
  disciplinasMinistradas?: DisciplinasMinistradas[];
}
