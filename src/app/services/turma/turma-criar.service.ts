import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from 'src/app/entities/turma/turma.interface';

@Injectable({
  providedIn: 'root'
})
export class TurmaCriarService {

  constructor(private http: HttpClient) { }

  abrirTurma(turma: Turma): Observable<Turma> {
    return this.http.post<Turma>('api/turmas', turma);
  }
}
