import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Aluno } from 'src/app/entities/aluno/aluno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlunosGetAllService {

  constructor(private http: HttpClient) { }

  getAllAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>('api/alunos');
  }
}
