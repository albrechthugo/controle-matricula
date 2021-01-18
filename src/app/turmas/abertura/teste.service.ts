import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  testeee = new EventEmitter<any>();

  constructor() { }

  adiciona(teste: any) {
    this.testeee.emit(teste);
  }
}
