import { Pessoa } from '../pessoa/pessoa.interface';
import { FormaDeIngresso } from '../aluno/forma-ingresso/ingresso.enum';

export interface Aluno extends Pessoa {
  id?: number,
  matricula: number,
  formaIngresso: FormaDeIngresso;
}