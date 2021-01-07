import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Aluno } from 'src/app/entities/aluno/aluno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlunosCriarService {

  constructor(private http: HttpClient) { }

  criarAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>('api/alunos', aluno);
  }
}
