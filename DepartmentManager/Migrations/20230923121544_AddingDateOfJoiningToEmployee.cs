using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DepartmentManager.Migrations
{
    public partial class AddingDateOfJoiningToEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "salario",
                table: "Employees",
                newName: "Salario");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Employees",
                newName: "Nome");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataDeEntrada",
                table: "Employees",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataDeEntrada",
                table: "Employees");

            migrationBuilder.RenameColumn(
                name: "Salario",
                table: "Employees",
                newName: "salario");

            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Employees",
                newName: "Name");
        }
    }
}
