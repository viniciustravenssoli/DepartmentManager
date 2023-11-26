import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { Employee } from 'src/app/Models/Employee';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {


  departamentos: Department[] = []

  cpf!: string;
  nome!: string;
  salario!: number;
  departmentId!: number;


  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.http.get<Department[]>("https://localhost:7047/api/departament/get-all")
      .subscribe({
        next: (departamentos) => {
          console.log(departamentos);
          this.departamentos = departamentos;
        },
        error: (erro) => {
          console.log(erro);
        }
      })
  }

  cadastrar(): void {
    let funcionario: Employee = {
      cpf: this.cpf,
      departmentId: this.departmentId,
      id: 0,
      idade: 0,
      nome: this.nome,
      salario: this.salario,
      salarioAnual: 0
    }

    this.http.post<Employee>("https://localhost:7047/api/employee/create", funcionario)
      .subscribe({
        next: (funcionario) => {
          this.snackBar.open("Funcionario Cadastrado com sucesso", 'Fechar', { duration: 3500 })
        },
        error: (error) => { 
          this.CreateErrorHandler(error)
          const message = `CPF: ${error.error.errors.CPF[0]}, Nome: ${error.error.errors.Nome[0]}, ${error.error.error}`;
          this.snackBar.open(message, 'Fechar', { duration: 5000 });
        }
      });
  }

  CreateErrorHandler(error: HttpErrorResponse) {
    this.snackBar.open(`${error.error.error}`, "Fechar", { duration: 5000 })
    console.log(error)
  }

}
