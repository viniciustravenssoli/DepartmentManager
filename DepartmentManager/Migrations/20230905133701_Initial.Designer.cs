﻿// <auto-generated />
using DepartmentManager.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DepartmentManager.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230905133701_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.20");

            modelBuilder.Entity("DepartmentManager.Models.Department", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("DepartamentName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("EmployeeLimit")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Departments");
                });
#pragma warning restore 612, 618
        }
    }
}
