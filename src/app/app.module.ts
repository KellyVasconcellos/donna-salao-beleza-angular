import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './acesso-aberto/pages/home/home.component';
import { SobreComponent } from './acesso-aberto/pages/sobre/sobre.component';
import { ServicosComponent } from './acesso-aberto/pages/servicos/servicos.component';
import { ContatoComponent } from './acesso-aberto/pages/contato/contato.component';
import { AgendamentoComponent } from './acesso-aberto/pages/agendamento/agendamento.component';
import { TemplateHomeComponent } from './acesso-aberto/pages/template-home/template-home.component';
import { FormaCartaoComponent } from './acesso-aberto/components/forma-cartao/forma-cartao.component';
import { MenuHamburguerComponent } from './acesso-aberto/components/menu-hamburguer/menu-hamburguer.component';
import { LoginComponent } from './acesso-login/view/login/login.component';
import { CadastrarComponent } from './acesso-login/view/cadastrar/cadastrar.component';
import { AreaLogadaComponent } from './acesso-login/view/area-logada/area-logada.component';
import { ModalEditarComponent } from './acesso-login/components/modal-editar/modal-editar.component';
import { FooterComponent } from './acesso-aberto/components/footer/footer.component';
import { ProfissionaisComponent } from './acesso-aberto/components/profissionais/profissionais.component';
import { BackgroundPretoComponent } from './acesso-aberto/components/background-preto/background-preto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

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
    FooterComponent,
    ProfissionaisComponent,
    BackgroundPretoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
