using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentManager.Models
{
    public class Department
    {
        public int Id { get; set;}
        public string DepartamentName { get; set;}
        public int EmployeeLimit { get; set;}
        // [JsonIgnore]
        // public virtual List<Employee>? Employees { get; set;}
    }
}