import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { AlunosGetAllService } from '../services/alunos-get-all.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosGetAllResolver implements Resolve<Observable<Aluno[]>> {

  constructor(private alunosGetAllService: AlunosGetAllService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.alunosGetAllService.getAllAlunos();
  }
}
