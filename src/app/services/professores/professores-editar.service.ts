import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Professor } from 'src/app/entities/professor/professor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresEditarService {

  constructor(private http: HttpClient) { }

  editarProfessor(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(`api/professores/${professor.id}`, professor);
  }
}
