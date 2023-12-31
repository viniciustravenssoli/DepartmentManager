import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/Models/Employee';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {
  employees !: Employee[];

  displayedColumns: string[] = ['cpf', 'dataDeEntrada', 'dataNascimento', 'nome', 'salario', 'salarioAnual', 'acoes'];

  constructor(private http: HttpClient) { }

  baseUrl = 'https://localhost:7047/api/employee/'

  ngOnInit(): void {
    const url = this.baseUrl + 'get-all';
    this.http.get<Employee[]>(url)
      .subscribe({
        next: (employees) => {
          console.log(employees);
          this.employees = employees;
        },
        error: (erro) => {
          console.log(erro);
        }
      });
  }

  delete(id: number): void {
    const url = this.baseUrl + `delete/${id}`
    const confirmarExclusao = window.confirm("Voce tem certeza que deseja deletar")
    if(confirmarExclusao){
    this.http.delete<Employee>(url)
      .subscribe({
        next: (employee) => {
          this.ngOnInit()
        },
        error: (erro) => {
          console.log(erro);
        }
      });
    }
  }

}
