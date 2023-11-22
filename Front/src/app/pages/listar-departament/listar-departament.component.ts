import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/Models/Department';

@Component({
  selector: 'app-listar-departament',
  templateUrl: './listar-departament.component.html',
  styleUrls: ['./listar-departament.component.css']
})

export class ListarDepartamentComponent implements OnInit {
  [x: string]: any;

  colunasTabela: string[] = [
    "Id",
    "DepartamentName",
    "EmployeeLimit"
  ];

    departaments !: Department[];

    constructor(private client: HttpClient) { }


    ngOnInit(): void {
      this.client
      .get<Department[]>("https://localhost:7047/api/departament/get-all")
      .subscribe({
        next: (departaments) => {
          console.log(departaments);
          this.departaments = departaments;
        },
        error: (erro) => {
          console.log(erro);
        }
      });
  }


  delete(id: number): void {
    this.client
    .delete<Department>("https://localhost:7047/api/departament/delete/{id}")
      .subscribe({
        next: (departament) => {
          this.ngOnInit()
          this.snackBar.open("Departamento cadastrado com sucesso!",{
            duration:1500,
            horizontalPosition: "right",
            verticalPosition: "top",
          })
        },
        error: (erro) => {
          console.log(erro);
        }
      });
    }
  }

