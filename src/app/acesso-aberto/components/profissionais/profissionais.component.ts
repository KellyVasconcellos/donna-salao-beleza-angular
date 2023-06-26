import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.scss']
})
export class ProfissionaisComponent {

  @Input() foto: string = ""
  @Input() nome: string = ""
  @Input() especialidade: string = ""

}
