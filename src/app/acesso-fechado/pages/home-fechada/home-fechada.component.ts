import { Component, OnInit } from '@angular/core';
import { SessaoEnum } from 'src/app/sessao/sessao.enum';
import { ISessao } from 'src/app/sessao/sessao.interface';
import { SessaoService } from 'src/app/sessao/sessao.service';
import { AcessoFechado } from '../../service/acesso-fechado.service';
import { IListaServico } from 'src/app/acesso-aberto/interface/lista_servico';
import { IUsuario } from 'src/app/acesso-login/interface/usuario';
import { IFuncionario } from 'src/app/acesso-aberto/interface/funcionario';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPerfilComponent } from '../../components/modal-perfil/modal-perfil.component';
import { horarios } from '../../components/calendario/horarios';
import { IAgendamento } from '../../interface/agendamento';
import { IHorario } from '../../interface/horario';

@Component({
  selector: 'app-home-fechada',
  templateUrl: './home-fechada.component.html',
  styleUrls: ['./home-fechada.component.scss'],
})

export class HomeFechadaComponent implements OnInit {

  closeResult: string | undefined;

  sessao!: ISessao

  funcionario: Array<IFuncionario> = []

  getFuncionario!: IFuncionario

  servico: Array<IListaServico> = []

  getServico!: IListaServico

  usuario!: IUsuario

  horarios = horarios

  apareceBotoes = false

  pegaHorario: string = ""

  agendamento!: IAgendamento

  pegaCalendario!: NgbDate



  constructor(private sessaoService: SessaoService, private acessoFechado: AcessoFechado,
  private modalService: NgbModal) {}

  open() {
		const modalRef = this.modalService.open(ModalPerfilComponent, { centered: true });
		modalRef.closed.subscribe(() => {
      console.log('Quando clica no OK do modal, a aplicação cai aqui!')
      console.log('Aqui deve ser o código de envio de formulário')
    })
	}

  ngOnInit(): void {
    const dadosSessao: ISessao = {
      idFuncionario: this.sessaoService.buscaSessao(SessaoEnum.CHAVE_FUNCIONARIO),
      idServico: this.sessaoService.buscaSessao(SessaoEnum.CHAVE_SERVICO),
      idCliente: this.sessaoService.buscaSessao(SessaoEnum.CHAVE_CLIENTE),
    };
    this.sessao = dadosSessao;
    console.log(this.sessao);

    this.acessoFechado.getFuncionario(dadosSessao.idFuncionario!).subscribe((response:IFuncionario) => {
      this.getFuncionario = response
      this.funcionario.push(response)
      console.log('aqui vai imprimir o funcionário escolhido', this.funcionario)
    });

    this.acessoFechado.getServico(dadosSessao.idServico).subscribe((response: IListaServico) => {
      this.getServico = response
      this.servico.push(response)
      console.log('aqui vai imprimir o serviço selecionado', this.servico)
    });

    this.acessoFechado.getCliente(dadosSessao.idCliente!).subscribe((response:IUsuario) => {
      this.usuario = response
      console.log('aqui vai imprimir o nome do usuario', this.usuario)
    });
  }



  gethorario(horario: string){
    this.pegaHorario = horario
  }

  pegaDataSelecionada(calendario: NgbDate){
    this.pegaCalendario = calendario
    this.apareceBotoes = true
  }

  agendar(){
    const pegaData = `${this.pegaCalendario.day}/${this.pegaCalendario.month}/${this.pegaCalendario.year}`
    const horario: IHorario = {
      dia: pegaData.trim(),
      horario: this.pegaHorario
    }

    const idAgendamento = Math.floor(Date.now() * Math.random())

    const agendamento: IAgendamento = {
      id : idAgendamento,
      id_funcionario : this.getFuncionario.id,
      nome_funcionario: this.getFuncionario.nome,
      id_cliente: this.usuario.id,
      nome_cliente: this.usuario.nome,
      id_servico: this.getServico.id,
      nome_servico:this.getServico.titulo,
      horario: horario
    }

    this.agendamento = agendamento

    this.acessoFechado.salvarAgendamento(this.agendamento).subscribe(() => {
      console.log("agendamento feito")
    })
  }


}
