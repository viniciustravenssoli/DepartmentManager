import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './pages/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionariosComponent } from './pages/listar-funcionarios/listar-funcionarios.component';
import { EditarFuncionarioComponent } from './pages/editar-funcionario/editar-funcionario.component';
import { CadastrarDepartamentComponent } from "./pages/cadastrar-departament/cadastrar-departament.component";
import { ListarDepartamentComponent } from './pages/listar-departament/listar-departament.component';

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

  {
    path: "pages/departmanet/cadastrar",
    component: CadastrarDepartamentComponent,
  },

  {
    path: "pages/departament/listar",
    component: ListarDepartamentComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
