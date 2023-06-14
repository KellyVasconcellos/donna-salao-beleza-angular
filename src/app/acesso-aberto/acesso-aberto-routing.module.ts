import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateHomeComponent } from './pages/template-home/template-home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: TemplateHomeComponent,
    children: [
      {
        path: '' ,
        component: HomeComponent,
      },
      {
        path: 'contato' ,
        component: ContatoComponent,
      },
      {
        path: 'agendamento' ,
        component: AgendamentoComponent,
      },
      {
        path: 'home' ,
        component: HomeComponent,
      },
      {
        path: 'login' ,
        component: LoginComponent,
      },
      {
        path: 'servicos' ,
        component: ServicosComponent,
      },
      {
        path: 'sobre' ,
        component: SobreComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AcessoAbertoRoutingModule { }
