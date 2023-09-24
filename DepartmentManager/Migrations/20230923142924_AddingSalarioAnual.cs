using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DepartmentManager.Migrations
{
    public partial class AddingSalarioAnual : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "SalarioAnual",
                table: "Employees",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SalarioAnual",
                table: "Employees");
        }
    }
}
