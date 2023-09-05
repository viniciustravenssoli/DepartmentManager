using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DepartmentManager.Models;
using Microsoft.EntityFrameworkCore;

namespace DepartmentManager.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Department> Departments { get; set; }
    }
}