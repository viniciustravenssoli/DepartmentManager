import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { Employee } from 'src/app/Models/Employee';

@Component({
  selector: 'app-departament-departament',
  templateUrl: './editar-departament.component.html',
  styleUrls: ['./editar-departament.component.css']
})
export class EditarDepartamentComponent implements OnInit {

  departamento!: Department
  id!: number;
  departamentName!: string;
  EmployeeLimit!: number; 

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.http.get<Department>(`https://localhost:7047/api/departament/find/${id}`)
    .subscribe({
      next: (departamento) => {
        this.departamento = departamento;
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  editar(): void {
    this.http.patch<Department>("https://localhost:7047/api/departament/update", this.departamento)
      .subscribe({
        next: (departamento) => {
          this.departamento = departamento;
        },
        error: (erro) => {
          console.log(erro);
        }
      })
  }

}
