using System.ComponentModel.DataAnnotations;
using DepartmentManager.Data;
using DepartmentManager.Models;
using Microsoft.EntityFrameworkCore;

namespace DepartmentManager;

public class CpfEmUso : ValidationAttribute
    {

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string cpf = (string)value;

            AppDbContext context =
                (AppDbContext)validationContext.GetService(typeof(AppDbContext));

            Employee employee = context.Employees.FirstOrDefault
                (f => f.CPF.Equals(cpf));
                
            if (employee == null)
            {
               
                return ValidationResult.Success;
            }
            
            return new ValidationResult("O CPF do funcionário já está em uso!");
        }
    }


