import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';
import { DisciplinaGetAllService } from '../services/disciplina-get-all.service';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasGetAllResolver implements Resolve<Observable<Disciplina[]>> {

  constructor(private disciplinasGetAllService: DisciplinaGetAllService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.disciplinasGetAllService.getAllDisciplinas();
  }
}
