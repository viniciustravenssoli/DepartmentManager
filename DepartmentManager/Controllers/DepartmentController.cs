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
    [Route("api/departament")]
    public class DepartmentController : ControllerBase
    {
        private readonly AppDbContext _context;
        public DepartmentController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Department departament)
        {
            _context.Departments.Add(departament);
            _context.SaveChanges();

            return Created("", departament);
        }

        [HttpGet]
        [Route("get-all")]
        public IActionResult GetAll()
        {
            var departaments =
                _context.Departments.ToList();

            if (departaments.Count == 0) return NotFound();

            return Ok(departaments);
        }

        [HttpPatch]
        [Route("update")]
        public IActionResult Update([FromBody] Department department)
        {
            _context.Departments.Update(department);
            _context.SaveChanges();
            return Ok(department);
        }

        [Route("delete/{id}")]
        [HttpDelete]
        public IActionResult DeleteById([FromRoute] int id)
        {
            var departament =
                _context.Departments.Find(id);
            if (departament != null)
            {
                _context.Departments.Remove(departament);
                _context.SaveChanges();
                return Ok(departament);
            }
            return NotFound();
        }

        [Route("find/{id}")]
        [HttpGet]
        public IActionResult FindById([FromRoute] int id)
        {
            var departament = _context.Departments.Find(id);
            
            return departament != null ? Ok(departament) : NotFound();
        }
    }
}