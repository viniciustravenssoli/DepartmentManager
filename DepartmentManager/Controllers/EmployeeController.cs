using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DepartmentManager.Data;
using DepartmentManager.Models;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult Create([FromBody] Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();

            return Created("", employee);
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
            var employee =
                _context.Employees.Find(id);
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
            var employee = _context.Employees.Find(id);
            
            return employee != null ? Ok(employee) : NotFound();
        }
    }
}


