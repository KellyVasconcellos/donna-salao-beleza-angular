import { Component, Input } from '@angular/core';
import { IFuncionario } from '../../interface/funcionario';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.scss']
})
export class ProfissionaisComponent {

  @Input() profissionais: Array<IFuncionario> = []
}
