import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFuncionario } from '../interface/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private api = 'http://localhost:3001/funcionario'

  constructor(private http: HttpClient) { }

  getFuncionarios() {
    return this.http.get<Array<IFuncionario>>(this.api)
  }
}
