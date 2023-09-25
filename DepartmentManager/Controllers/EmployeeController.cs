using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DepartmentManager.Data;
using DepartmentManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DepartmentManager.Controllers
{
    [ApiController]
    [Route("api/employee")]
    public class EmployeeController : ControllerBase
    {
        private readonly AppDbContext _context;
        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create([FromBody] Employee employee)
        {
            try
            {
                var department = await _context.Departments.FirstOrDefaultAsync(x => x.Id == employee.DepartmentId);

                if (department == null)
                {
                    return NotFound("Departamento Não Encontrado");
                }
                var employees = _context.Employees.Count(x => x.DepartmentId == employee.DepartmentId);

                if (employees >= department.EmployeeLimit)
                {
                    return BadRequest($"O departamento {department.DepartamentName} atingiu o seu limite maximo de {department.EmployeeLimit} funcionários.");
                }

                employee.SalarioAnual = employee.Salario * 12;

                employee.Department = department;

                _context.Employees.Add(employee);
                _context.SaveChanges();

                return Created("Employee criado com sucesso", employee);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("get-all")]
        public IActionResult GetAll()
        {
            var employees =
                _context.Employees.ToList();

            if (employees.Count == 0) return NotFound();

            return Ok(employees);
        }

        [HttpGet]
        [Route("listarBonificacao/{employeId}")]
        public async Task<IActionResult> ListarBonificaçao([FromRoute] int employeId)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(x => x.Id == employeId);

            if (employee == null) return NotFound();

            var yearsOfWork = CalcularAnosDeTrabalho(employee.DataDeEntrada, DateTime.Now);

            if (yearsOfWork <= 1)
            {
                employee.Salario *= 1.15;
            }
            else if (yearsOfWork <= 2)
            {
                employee.Salario *= 1.15;
            }
            else if (yearsOfWork <= 4)
            {
                employee.Salario *= 1.25;
            }
            else if (yearsOfWork >= 5)
            {
                employee.Salario *= 1.35;
            }

            return Ok(employee);
        }

        [HttpGet]
        [Route("Listar-Bonificação")]
        public IActionResult ListarFuncionariosComBonificacao()
        {
            var employees = _context.Employees.ToList();

            if (employees.Count == 0) return NotFound();

            foreach (var employee in employees)
            {
                var yearsOfWork = CalcularAnosDeTrabalho(employee.DataDeEntrada, DateTime.Now);

                if (yearsOfWork <= 1)
                {
                    employee.Salario *= 1.15;
                }
                else if (yearsOfWork <= 2)
                {
                    employee.Salario *= 1.15;
                }
                else if (yearsOfWork <= 4)
                {
                    employee.Salario *= 1.25;
                }
                else if (yearsOfWork >= 5)
                {
                    employee.Salario *= 1.35;
                }
            }
            return Ok(employees);
        }

        [HttpPatch]
        [Route("update")]
        public IActionResult Update([FromBody] Employee employee)
        {
            _context.Employees.Update(employee);
            _context.SaveChanges();
            return Ok(employee);
        }

        [Route("delete/{id}")]
        [HttpDelete]
        public IActionResult DeleteById([FromRoute] int id)
        {
            var employee = _context.Employees.FirstOrDefault(x => x.Id == id);
            if (employee != null)
            {
                _context.Employees.Remove(employee);
                _context.SaveChanges();
                return Ok(employee);
            }
            return NotFound();
        }

        [Route("find/{id}")]
        [HttpGet]
        public IActionResult FindById([FromRoute] int id)
        {
            var employee = _context.Employees.FirstOrDefault(x => x.Id == id);

            return employee != null ? Ok(employee) : NotFound();
        }

        [HttpGet]
        [Route("GetAllEmployesFromDepartament/{departmentId}")]
        public IActionResult GetAllEmployesFromDepartament([FromRoute] int departmentId)
        {
            var employees = _context.Employees.Include(f => f.Department).Where(x => x.DepartmentId == departmentId).ToList();

            return employees.Count == 0 ? NotFound() : Ok(employees);
        }

        public static int CalcularAnosDeTrabalho(DateTime dataEntrada, DateTime dataAtual)
        {
            int yearsOfWork = dataAtual.Year - dataEntrada.Year;

            if (dataEntrada > dataAtual.AddYears(-yearsOfWork))
            {
                yearsOfWork--;
            }
            return yearsOfWork;
        }
    }
}


