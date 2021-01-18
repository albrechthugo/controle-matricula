import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from 'src/app/entities/turma/turma.interface';

@Injectable({
  providedIn: 'root'
})
export class TurmaCriarService {

  canResetForm = new EventEmitter<Turma>();

  constructor(private http: HttpClient) { }

  abrirTurma(turma: Turma): Observable<Turma> {
    this.canResetForm.emit(turma)
    return this.http.post<Turma>('api/turmas', turma);
  }
}
