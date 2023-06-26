import { Component, Input } from '@angular/core';
import { IFuncionario } from '../../interface/funcionario';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.scss']
})
export class ProfissionaisComponent {

  @Input() profissionais: Array<IFuncionario> = []

  @Output() idFuncionario = new EventEmitter<number>();

  getId(id: number) {
    this.idFuncionario.emit(id);
  }
}
