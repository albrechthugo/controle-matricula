import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Disciplina } from '../../../../entities/disciplina/disciplina.interface';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaGetAllService {

  constructor(private http: HttpClient) { }

  getAllDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>('api/disciplinas');
  }
}
