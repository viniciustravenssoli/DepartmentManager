import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './pages/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionariosComponent } from './pages/listar-funcionarios/listar-funcionarios.component';
import { EditarFuncionarioComponent } from './pages/editar-funcionario/editar-funcionario.component';

const routes: Routes = [
  {
    path: "pages/funcionario/cadastrar",
    component: CadastrarFuncionarioComponent,
  },
  {
    path: "pages/funcionario/update/:id",
    component: EditarFuncionarioComponent,
  },
  {
    path: "pages/funcionario/listar",
    component: ListarFuncionariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
