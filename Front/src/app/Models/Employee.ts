import { Department } from "./Department";

export interface Employee {
    cpf: string;
    dataDeEntrada: Date;
    dataNascimento: Date;
    department: Department;
    departmentId: number;
    id: number;
    idade: number;
    nome: string;
    salario: number;
    salarioAnual: number;
  }