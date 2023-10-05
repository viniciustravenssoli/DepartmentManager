using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentManager.DTOs
{
    public class WorktimeDTO
    {
        public DateTime EntryTime { get; set; }
        public DateTime ExitTime { get; set; }
        public int EmployeeId { get; set; }
    }
}