using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class Segundo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "tipo_usuario",
                table: "Cliente",
                newName: "Tipo_usuario");

            migrationBuilder.RenameColumn(
                name: "correo_electronico",
                table: "Cliente",
                newName: "Correo_electronico");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Tipo_usuario",
                table: "Cliente",
                newName: "tipo_usuario");

            migrationBuilder.RenameColumn(
                name: "Correo_electronico",
                table: "Cliente",
                newName: "correo_electronico");
        }
    }
}
