﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentManager.Models
{
    public class Employee
    {
        public int Id { get; set;}
        public string Nome { get; set;}
        public int CPF { get; set;}
        public double Salario { get; set; }
        public double SalarioAnual { get; set; }
        public DateTime DataDeEntrada { get; set; }
        public int DepartmentId { get; set; } 
        public Department Department { get; set; }
    }
}