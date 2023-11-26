using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DepartmentManager.Data;
using DepartmentManager.DTOs;
using DepartmentManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DepartmentManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkTimeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WorkTimeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> AddWorkTime(WorktimeDTO workTimedto)
        {
            var employee = await _context.Employees.Include(x => x.Department).FirstOrDefaultAsync(x => x.Id == workTimedto.EmployeeId);

            if (employee == null)
            {
                return NotFound();
            }
            if (workTimedto.EntryTime >= workTimedto.ExitTime)
            {
                return BadRequest("A hora de entrada deve ser anterior à hora de saída.");
            }

            var newWorkTime = new WorkTime
            {
                Employee = employee,
                EmployeeId = employee.Id,
                EntryTime = workTimedto.EntryTime,
                ExitTime = workTimedto.ExitTime,
                WorkedHours = CalcularHorasPassadas(workTimedto.EntryTime, workTimedto.ExitTime)
            };

            _context.WorkTimes.Add(newWorkTime);
            _context.SaveChanges();

            return Created($"{newWorkTime.WorkedHours} horas adicionadas ao {employee.Nome} com sucesso", newWorkTime);
        }

        [HttpGet]
        [Route("get-total-worktime/{employeeId}")]
        public IActionResult GetTotalWorktime(int employeeId)
        {
            var worktimes = _context.WorkTimes.Include(x => x.Employee).Where(x => x.EmployeeId == employeeId).ToList();

            if (worktimes.Count == 0) return NotFound();

            double totalDeHorasTrabalhadas = 0;

            foreach (var worktime in worktimes)
            {
                totalDeHorasTrabalhadas += worktime.WorkedHours;
            }

            return Ok(totalDeHorasTrabalhadas);
        }

        [HttpGet]
        [Route("get-all-worktimes/{employeeId}")]
        public IActionResult GetAllWorktime(int employeeId)
        {
            var worktimes = _context.WorkTimes.Include(x => x.Employee).Where(x => x.EmployeeId == employeeId).ToList();

            if (worktimes.Count == 0) return NotFound();

            return Ok(worktimes);
        }

        public static double CalcularHorasPassadas(DateTime dataEntrada, DateTime dataSaida)
        {
            var diferenca = dataSaida - dataEntrada;
            return diferenca.TotalHours;
        }
    }
}