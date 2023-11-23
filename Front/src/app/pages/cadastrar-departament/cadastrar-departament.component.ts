import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { Employee } from 'src/app/Models/Employee';

@Component({
  selector: 'app-cadastrar-departament',
  templateUrl: './cadastrar-departmanet.component.html',
  styleUrls: ['./cadastrar-departament.component.css']
})

export class CadastrarDepartamentComponent implements OnInit {

  id!: number;
  departamentName!: string;
  employeeLimit!: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  cadastrar(): void {
    let departamento: Department = {
      id: this.id,
      departamentName: this.departamentName,
      employeeLimit: this.employeeLimit

    }

    this.http.post<Department>("https://localhost:7047/api/departament/create", departamento)
      .subscribe({
        next: (departamento) => {
        },

        error: (erro) => {
          console.log(erro);
        }
      })
  }

}
