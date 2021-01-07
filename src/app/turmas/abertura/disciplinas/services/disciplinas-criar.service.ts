import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasCriarService {

  constructor(private http: HttpClient) { }

  criarDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>('api/disciplinas', disciplina);
  }
}
