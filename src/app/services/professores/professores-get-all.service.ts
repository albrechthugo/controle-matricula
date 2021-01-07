import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Professor} from '../../entities/professor/professor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGetAllService {

  constructor(private http: HttpClient) { }

  getAllProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>('api/professores');
  }
}
