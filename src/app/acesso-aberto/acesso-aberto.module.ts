import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FormaCartaoComponent } from './pages/home/components/forma-cartao/forma-cartao.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MenuHamburguerComponent } from './pages/template-home/components/menu-hamburguer/menu-hamburguer.component';
import { TemplateHomeComponent } from './pages/template-home/template-home.component';
import { AcessoAbertoRoutingModule } from './acesso-aberto-routing.module';
import { AcessoLoginModule } from '../acesso-login/acesso-login.module';



@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ServicosComponent,
    ContatoComponent,
    AgendamentoComponent,
    TemplateHomeComponent,
    FormaCartaoComponent,
    MenuHamburguerComponent
  ],
  imports: [
    CommonModule,
    AcessoAbertoRoutingModule,
    AcessoLoginModule,
  ]
})
export class AcessoAbertoModule { }
