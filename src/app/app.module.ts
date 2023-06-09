import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { TemplateHomeComponent } from './pages/template-home/template-home.component';
import { FormaCartaoComponent } from './pages/home/components/forma-cartao/forma-cartao.component';
import { MenuHamburguerComponent } from './pages/template-home/components/menu-hamburguer/menu-hamburguer.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
