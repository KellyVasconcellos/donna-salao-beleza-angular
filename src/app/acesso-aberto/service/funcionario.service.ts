import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFuncionario } from '../interface/funcionario';
import { IServico } from '../interface/servico';
import { IListaServico } from '../interface/lista_servico';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiFuncionario = 'http://localhost:3000/funcionario'
  private apiServico = 'http://localhost:3001/servico'
  private apiListaServico = 'http://localhost:3002/servicos_lista'

  constructor(private http: HttpClient) { }

  getFuncionarios() {
    return this.http.get<Array<IFuncionario>>(this.apiFuncionario)
  }

  getServicos() {
    return this.http.get<Array<IServico>>(this.apiServico)
  }

  getListaServico() {
    return this.http.get<Array<IListaServico>>(this.apiListaServico)
  }
}
