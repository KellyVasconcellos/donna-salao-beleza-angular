import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoComponent } from './acesso-aberto/pages/agendamento/agendamento.component';
import { ContatoComponent } from './acesso-aberto/pages/contato/contato.component';
import { FormaCartaoComponent } from './acesso-aberto/pages/home/components/forma-cartao/forma-cartao.component';
import { HomeComponent } from './acesso-aberto/pages/home/home.component';
import { ServicosComponent } from './acesso-aberto/pages/servicos/servicos.component';
import { SobreComponent } from './acesso-aberto/pages/sobre/sobre.component';
import { MenuHamburguerComponent } from './acesso-aberto/pages/template-home/components/menu-hamburguer/menu-hamburguer.component';
import { TemplateHomeComponent } from './acesso-aberto/pages/template-home/template-home.component';
import { ModalEditarComponent } from './acesso-login/components/modal-editar/modal-editar.component';
import { AreaLogadaComponent } from './acesso-login/view/area-logada/area-logada.component';
import { CadastrarComponent } from './acesso-login/view/cadastrar/cadastrar.component';
import { LoginComponent } from './acesso-login/view/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ServicosComponent,
    ContatoComponent,
    AgendamentoComponent,
    TemplateHomeComponent,
    FormaCartaoComponent,
    MenuHamburguerComponent,
    LoginComponent,
    CadastrarComponent,
    AreaLogadaComponent,
    ModalEditarComponent,
    ModalEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
