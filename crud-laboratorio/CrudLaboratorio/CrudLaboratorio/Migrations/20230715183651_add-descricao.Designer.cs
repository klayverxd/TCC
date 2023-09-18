﻿// <auto-generated />
using CrudLaboratorio.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CrudLaboratorio.Migrations
{
    [DbContext(typeof(ComponenteDbContext))]
    [Migration("20230715183651_add-descricao")]
    partial class adddescricao
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("CrudLaboratorio.Models.ComponenteModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Descricao")
                        .HasColumnType("longtext");

                    b.Property<string>("Nome")
                        .HasColumnType("longtext");

                    b.Property<int>("Quantidade")
                        .HasColumnType("int");

                    b.Property<string>("Referencia")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Componentes");
                });
#pragma warning restore 612, 618
        }
    }
}
