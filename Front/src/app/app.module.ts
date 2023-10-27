import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CadastrarFuncionarioComponent } from "./pages/cadastrar-funcionario/cadastrar-funcionario.component";
import { ListarFuncionariosComponent } from "./pages/listar-funcionarios/listar-funcionarios.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  //Componentes da aplicação
  declarations: [
    AppComponent,
    ListarFuncionariosComponent,
    CadastrarFuncionarioComponent
  ],
  //Bibliotecas externas da aplicação
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }