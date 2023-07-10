import { Injectable } from '@angular/core';
import { ISessao } from './sessao.interface';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  CHAVE_SESSAO = "usuario_sessao";

  /**
   * Ao fazer login devemos guardar o id do usuario na sessao do navegador.
   * criar um formulario reativo (ver no git da bruxa) para pegar os valores: id imagem e id serviço.
   * Enviar id imagem e id serviço via serviço subject (criar dentro do seviço de sessao o subject para enviar ids e capturar ids).
   * ver referencia para subject: https://consolelog.com.br/como-proteger-rotas-angular-com-guard/
   */

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


