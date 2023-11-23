import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
      <h1>{{ title }}</h1>
      <nav>
        <a routerLink="/pages/funcionario/listar">Listar Funcionarios</a>
        <a routerLink="/pages/funcionario/cadastrar">Cadastrar Funcionarios</a>
        <a routerLink="/pages/departmanet/cadastrar">Cadastrar Departamentos</a>
        <a routerLink="/pages/departament/listar">Listar Departamentos</a>
      </nav>
    </div>

    <div class="content">
      <router-outlet>
        <!-- Mostrar os componentes selecionados -->
      </router-outlet>
    </div>
  `,
  styles: [`
  .header {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
  }

  nav {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  nav a {
    color: white;
    text-decoration: none;
    padding: 5px;
    cursor: pointer; /* Adiciona um cursor de mão ao passar o mouse sobre os links */
    transition: color 0.3s; /* Adiciona uma transição suave na mudança de cor */
  }

  nav a:hover {
    color: #76cce0; /* Muda a cor ao passar o mouse sobre os links */
  }

  nav a.active {
    border-bottom: 2px solid #76cce0; /* Adiciona uma borda inferior aos links ativos */
  }

  .content {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`]
})
export class AppComponent {
  title = 'Front';
}
