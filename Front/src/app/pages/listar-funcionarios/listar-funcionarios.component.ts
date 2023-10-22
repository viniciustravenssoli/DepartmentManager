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

  constructor(private http: HttpClient) { }

  apiUrl = 'https://localhost:7047/api/employee/'

  ngOnInit(): void {
    const url = this.apiUrl + 'get-all';
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

}
