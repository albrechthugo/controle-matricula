import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Professor} from '../../entities/professor/professor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresCriarService {

  constructor(private http: HttpClient) { }

  criarProfessor(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>('api/professores', professor)
  }
}
