import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessaoEnum } from 'src/app/sessao/sessao.enum';
import { ISessao } from 'src/app/sessao/sessao.interface';
import { SessaoService } from 'src/app/sessao/sessao.service';
import { AcessoFechado } from './service/acesso-fechado.service';
import { IListaServico } from 'src/app/acesso-aberto/interface/lista_servico';
import { IUsuario } from 'src/app/acesso-login/interface/usuario';
import { IFuncionario } from 'src/app/acesso-aberto/interface/funcionario';

@Component({
  selector: 'app-home-fechada',
  templateUrl: './home-fechada.component.html',
  styleUrls: ['./home-fechada.component.scss'],
})
export class HomeFechadaComponent implements OnInit {

  sessao!: ISessao

  funcionario!: IFuncionario

  servico!: IListaServico

  usuario!: IUsuario

  constructor(private sessaoService: SessaoService, private acessoFechado: AcessoFechado) {}

  ngOnInit(): void {
    const dadosSessao: ISessao = {
      idFuncionario: this.sessaoService.buscaSessao(SessaoEnum.CHAVE_FUNCIONARIO),
      idServico: this.sessaoService.buscaSessao(SessaoEnum.CHAVE_SERVICO),
      idCliente: this.sessaoService.buscaSessao(SessaoEnum.CHAVE_CLIENTE),
    };
    this.sessao = dadosSessao;
    console.log(this.sessao);

    this.acessoFechado.getFuncionario(dadosSessao.idFuncionario!).subscribe((response:IFuncionario) => {
      this.funcionario = response
      console.log('aqui vai imprimir o funcionário escolhido', this.funcionario)
    });

    this.acessoFechado.getServico(dadosSessao.idServico).subscribe((response: IListaServico) => {
      this.servico = response
      console.log('aqui vai imprimir o serviço selecionado', this.servico)
    });

    this.acessoFechado.getCliente(dadosSessao.idCliente!).subscribe((response:IUsuario) => {
      this.usuario = response
      console.log('aqui vai imprimir o nome do usuario', this.usuario)
    });






  }

  /**
   * criar service acesso-fechada/service
   * 1 - criar uma chamada na service para buscar o funcionario pelo dadosSessao.idFuncionario
   * 2 - criar uma chamada na service para buscar o serviço pelo dadosSessao.idServico
   * 3 - criar uma chamada na service para buscar o cliente pelo dadosSessao.idCliente
   * 4 - exibir o resultado de cada serviço na tela aqui home-fechada
   *
   * exemplo de chamada na service http://localhost:3002/servicos_lista/3
   * http://localhost:3002/servicos_lista/{id}
   */
}
