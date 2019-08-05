using Microsoft.EntityFrameworkCore.Migrations;

namespace AIL.TicTacToe.Migrations
{
    public partial class updateModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Moves_Games_GamesId",
                table: "Moves");

            migrationBuilder.DropIndex(
                name: "IX_Moves_GamesId",
                table: "Moves");

            migrationBuilder.RenameColumn(
                name: "GamesId",
                table: "Moves",
                newName: "Index");

            migrationBuilder.AddColumn<int>(
                name: "GameId",
                table: "Moves",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Moves_GameId",
                table: "Moves",
                column: "GameId");

            migrationBuilder.AddForeignKey(
                name: "FK_Moves_Games_GameId",
                table: "Moves",
                column: "GameId",
                principalTable: "Games",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Moves_Games_GameId",
                table: "Moves");

            migrationBuilder.DropIndex(
                name: "IX_Moves_GameId",
                table: "Moves");

            migrationBuilder.DropColumn(
                name: "GameId",
                table: "Moves");

            migrationBuilder.RenameColumn(
                name: "Index",
                table: "Moves",
                newName: "GamesId");

            migrationBuilder.CreateIndex(
                name: "IX_Moves_GamesId",
                table: "Moves",
                column: "GamesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Moves_Games_GamesId",
                table: "Moves",
                column: "GamesId",
                principalTable: "Games",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
