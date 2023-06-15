import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDeletarComponent } from './components/modal-deletar/modal-deletar.component';
import { ModalEditarComponent } from './components/modal-editar/modal-editar.component';
import { AreaLogadaComponent } from './view/area-logada/area-logada.component';
import { CadastrarComponent } from './view/cadastrar/cadastrar.component';
import { LoginComponent } from './view/login/login.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent,
    CadastrarComponent,
    AreaLogadaComponent,
    ModalDeletarComponent,
    ModalEditarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AcessoLoginModule { }
