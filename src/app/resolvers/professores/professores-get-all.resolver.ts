import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Professor } from 'src/app/entities/professor/professor.interface';
import { ProfessoresGetAllService } from 'src/app/services/professores/professores-get-all.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGetAllResolver implements Resolve<Observable<Professor[]>> {
  
  constructor(private professoresGetAllService: ProfessoresGetAllService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.professoresGetAllService.getAllProfessores();
  }
}
