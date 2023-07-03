import { Component } from '@angular/core';
import { FuncionarioService } from '../../service/funcionario.service';

@Component({
  selector: 'app-template-home',
  templateUrl: './template-home.component.html',
  styleUrls: ['./template-home.component.scss']
})
export class TemplateHomeComponent {

  constructor(
    private service: FuncionarioService
  ) {}

  navegaUrl(url: string, id: string) {
    this.service.navegaUrl(url, id)
  }
}
