import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->

    <a routerLink="/pages/funcionario/listar"> Listar Funcionarios</a>
    <a routerLink="/pages/funcionario/cadastrar"> Cadastrar Funcionarios</a>
    <a routerLink="/pages/departmanet/cadastrar"> Cadastrar Departamentos</a>
    <a routerLink="/pages/departament/listar"> Listar Departamentos</a>
   


    <div>
      <router-outlet>
        <!-- Mostrar os componentes selecionados -->
      </router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Front';
}
