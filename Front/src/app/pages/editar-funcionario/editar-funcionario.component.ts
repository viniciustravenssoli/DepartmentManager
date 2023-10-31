import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  funcionario!: Employee
  cpf!: string;
  nome!: string;
  salario!: number;

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.http.get<Employee>(`https://localhost:7047/api/employee/find/${id}`)
    .subscribe({
      next: (funcionario) => {
        this.funcionario = funcionario;
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  editar(): void {
    this.http.patch<Employee>("https://localhost:7047/api/employee/update", this.funcionario)
      .subscribe({
        next: (funcionario) => {
          this.funcionario = funcionario;
        },
        error: (erro) => {
          console.log(erro);
        }
      })
  }

}
