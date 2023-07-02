import { Injectable } from '@angular/core';
import { ISessao } from './sessao.interface';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  CHAVE_SESSAO = "usuario_sessao";

  constructor() { }

  salvarSessao(sessao: ISessao){
    sessionStorage.setItem(this.CHAVE_SESSAO, JSON.stringify(sessao))
  }

  buscaSessao():boolean {
    let sessao = sessionStorage.getItem(this.CHAVE_SESSAO);

    if (sessao == null || sessao == undefined) {
      return false
    }
    return true
  }

  limparSessao(){
    sessionStorage.clear()
  }
}


