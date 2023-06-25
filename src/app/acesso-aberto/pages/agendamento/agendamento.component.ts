import { Component } from '@angular/core';
import { IHorario } from '../../interface/horario';
import { DiaHorarioEnum } from '../../enum/diaHorario';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})


export class AgendamentoComponent {

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
