import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/Models/Employee';
import { Horas } from 'src/app/Models/Horas';

@Component({
  selector: 'app-horas-cadastrar',
  templateUrl: './horas-cadastrar.component.html',
  styleUrls: ['./horas-cadastrar.component.css']
})
export class HorasCadastrarComponent implements OnInit {

  entryTime!: Date
  ExitTime!: Date
  funcionarios!: Employee[]
  funcionarioId!: number;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.http.get<Employee[]>("https://localhost:7047/api/employee/get-all")
      .subscribe({
        next: (employee) => {
          console.log(employee);
          this.funcionarios = employee;
        },
        error: (erro) => {
          console.log(erro);
        }
      })
  }

  cadastrar(): void {
    let horas: Horas = {
      entryTime: this.entryTime,
      ExitTime: this.ExitTime,
      employeeId: this.funcionarioId
    }

    this.http.post<Horas>("https://localhost:7047/api/worktime/create", horas)
      .subscribe({
        next: (horas) => {
          this.snackBar.open("Horas adicionas ao funcionario com sucesso", 'Fechar', { duration: 3500 })
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
