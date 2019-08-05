using Microsoft.EntityFrameworkCore.Migrations;

namespace AIL.TicTacToe.Migrations
{
    public partial class TicTacToe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Moves_Games_GamesId",
                table: "Moves");

            migrationBuilder.DropColumn(
                name: "Games",
                table: "Moves");

            migrationBuilder.AlterColumn<int>(
                name: "GamesId",
                table: "Moves",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Letter",
                table: "Moves",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Moves_Games_GamesId",
                table: "Moves",
                column: "GamesId",
                principalTable: "Games",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Moves_Games_GamesId",
                table: "Moves");

            migrationBuilder.DropColumn(
                name: "Letter",
                table: "Moves");

            migrationBuilder.AlterColumn<int>(
                name: "GamesId",
                table: "Moves",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "Games",
                table: "Moves",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Moves_Games_GamesId",
                table: "Moves",
                column: "GamesId",
                principalTable: "Games",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
