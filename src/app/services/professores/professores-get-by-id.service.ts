import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Professor } from 'src/app/entities/professor/professor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGetByIdService {

  constructor(private http: HttpClient) { }

  professorGetById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`api/professores/${id}`);
  }
}
