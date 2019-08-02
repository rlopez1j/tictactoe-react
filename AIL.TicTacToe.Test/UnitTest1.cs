using AIL.TicTacToe.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Linq;

namespace AIL.TicTacToe.Test
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var options = new DbContextOptionsBuilder<TicTacToeContext>()
                .UseSqlServer("Server=localhost;Database=TicTacToe;Trusted_Connection=True;ConnectRetryCount=0")
                .Options;

            // Run the test against one instance of the context
            using (var context = new TicTacToeContext(options))
            {
                var result = context.Games.Select(x => new { x.Date, x.Id, x.Winner }).ToList();
                System.Console.WriteLine(result);
            }
        }

        [TestMethod]
        public void POST()
        {
            var options = new DbContextOptionsBuilder<TicTacToeContext>()
                    .UseSqlServer("Server=localhost;Database=TicTacToe;Trusted_Connection=True;ConnectRetryCount=0")
                    .Options;

            // wrk on this
            var moves = new Moves() { Id = 1, Timestamp = new System.DateTime(2019, 8, 18), Games = games.Id}; // actually create objects for this
            var game = new Games() { Id = 1, Date = new System.DateTime(2019, 8, 18), Winner = "X", Moves = [moves]}; // actually create objects for this

            using (var context = new TicTacToeContext(options))
            {
                context.Games.Add(game);
                context.Moves.Add(moves);
                context.SaveChanges();
            }
        }
    }
}
