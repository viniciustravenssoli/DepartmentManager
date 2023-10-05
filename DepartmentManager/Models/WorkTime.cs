using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentManager.Models
{
    public class WorkTime
    {
        public int Id { get; set; }
        public DateTime EntryTime { get; set; }
        public DateTime ExitTime { get; set; }
        public double WorkedHours { get; set; }
        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
    }
}