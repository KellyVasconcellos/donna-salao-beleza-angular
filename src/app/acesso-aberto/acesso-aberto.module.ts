import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FormaCartaoComponent } from './pages/home/components/forma-cartao/forma-cartao.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MenuHamburguerComponent } from './pages/template-home/components/menu-hamburguer/menu-hamburguer.component';
import { TemplateHomeComponent } from './pages/template-home/template-home.component';
import { AcessoAbertoRoutingModule } from './acesso-aberto-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ServicosComponent,
    LoginComponent,
    ContatoComponent,
    AgendamentoComponent,
    TemplateHomeComponent,
    FormaCartaoComponent,
    MenuHamburguerComponent
  ],
  imports: [
    CommonModule,
    AcessoAbertoRoutingModule
  ]
})
export class AcessoAbertoModule { }
