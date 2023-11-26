import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/Models/Employee';
import { Worktimeresponse } from 'src/app/Models/Worktimeresponse';

@Component({
  selector: 'app-listar-horastrabalhas-porfuncionario',
  templateUrl: './listar-horastrabalhas-porfuncionario.component.html',
  styleUrls: ['./listar-horastrabalhas-porfuncionario.component.css']
})
export class ListarHorastrabalhasPorfuncionarioComponent implements OnInit {


  funcionarios!: Employee[]
  funcionarioId!: number;
  worktime!: Worktimeresponse;

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

  buscarhoras() : void {
    this.http.get<Worktimeresponse>(`https://localhost:7047/api/worktime/get-total-worktime/${this.funcionarioId}`)
    .subscribe({
      next: (wokrtime) => {
        this.worktime = wokrtime
        console.log(wokrtime)
      },
      error: (erro) =>{
        this.snackBar.open("esse funcionario ainda nao possui horas registradas", "Fechar", {duration: 3000})
      }
    })
  }
}
