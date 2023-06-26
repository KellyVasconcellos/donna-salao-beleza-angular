import { Component, OnInit } from '@angular/core';
import { IHorario } from '../../interface/horario';
import { DiaHorarioEnum } from '../../enum/diaHorario';
import { FuncionarioService } from '../../service/funcionario.service';
import { IFuncionario } from '../../interface/funcionario';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  funcionarios: Array<IFuncionario> = []

  profissionais = []

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.getFuncionarios()
      .subscribe((resposta: Array<IFuncionario>) => {
        this.funcionarios = resposta
        // criar uma lista de funcionarios pegando foto,nome e especialidade
        //criar uma classe para poder passar para dentro do componente
        //this.funcionarios.forEach(item => {
        //   this.profissionais.push(item.)
        // })
        // this.profissionais.push(this.)
      })

  }

  horarios: Array<IHorario> = [
    {
      dia: "Segunda-Feira",
      horario: "09:00 - 21:00"
    },
    {
      dia: "Terça-Feira",
      horario: "09:00 - 21:00"
    },
    {
      dia: "Quarta-Feira",
      horario: "09:00 - 21:00"
    },
    {
      dia: "Quinta-Feira",
      horario: "09:00 - 21:00"
    },
    {
      dia: "Sexta-Feira",
      horario: "09:00 - 21:00"
    },
    {
      dia: "Sábado",
      horario: "08:00 - 19:00"
    },
    {
      dia: "Domingo",
      horario: "Fechado"
    },
  ];

  diaAtual(dia:string): boolean {
    const data = new Date()
    const pegaDiaEnum = DiaHorarioEnum[data.getDay()]
    if (pegaDiaEnum == dia){
      return true
    } else {
      return false
    }
  }
}
