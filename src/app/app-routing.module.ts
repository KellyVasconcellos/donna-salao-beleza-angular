import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoAbertoRoutingModule } from './acesso-aberto/acesso-aberto-routing.module';

const routes: Routes = [
  {
    path: 'acesso-aberto',
    loadChildren: () => AcessoAbertoRoutingModule
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
