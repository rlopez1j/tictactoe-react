using AIL.TicTacToe.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Linq;
using System.Collections.Generic;

namespace AIL.TicTacToe.Test
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void FancyGet()
        {
            var options = new DbContextOptionsBuilder<TicTacToeContext>()
                .UseSqlServer("Server=localhost;Database=TicTacToe;Trusted_Connection=True;ConnectRetryCount=0")
                .Options;

            // Run the test against one instance of the context
            using (var context = new TicTacToeContext(options))
            {
                var result = context.Games.Select(x => new { x.Date, x.Winner }).ToList();
                System.Console.WriteLine($"fancy: {result[0]}");
            }
        }

        [TestMethod]
        public void BasicGet()
        {
            var options = new DbContextOptionsBuilder<TicTacToeContext>()
                .UseSqlServer("Server=localhost;Database=TicTacToe;Trusted_Connection=True;ConnectRetryCount=0")
                .Options;

            using(var context = new TicTacToeContext(options))
            {
                var result = context.Games.ToList();
                System.Console.WriteLine($"basic: {result[0]}");
            }
        }

        [TestMethod]
        public void MoveListGet()
        {
            List<Move> moves;
            var options = new DbContextOptionsBuilder<TicTacToeContext>()
                .UseSqlServer("Server=localhost;Database=TicTacToe;Trusted_Connection=True;ConnectRetryCount=0")
                .Options;

            using (var context = new TicTacToeContext(options))
            {
                var game = context.Games.Where(g => g.Id == 4).FirstOrDefault();
                moves = context.Moves.Where(m => m.GameId == game.Id).ToList();
            }
            moves.ForEach(delegate (Move m)
            {
                System.Console.WriteLine($"moves: {m.Letter}, {m.Timestamp}, {m.Id}");
            });
        }

        [TestMethod]
        public void POST()
        {
            var options = new DbContextOptionsBuilder<TicTacToeContext>()
                    .UseSqlServer("Server=localhost;Database=TicTacToe;Trusted_Connection=True;ConnectRetryCount=0")
                    .Options;

            // wrk on this
            var game = new Game() {Date = System.DateTime.Now, Winner = "L"}; // actually create objects for this
            
            using (var context = new TicTacToeContext(options))
            {
                context.Games.Add(game);
                context.SaveChanges();
            }

            var moves = new Move() { Timestamp = System.DateTime.Now, Letter = "O", GameId = game.Id, }; // actually create objects for this
            var moves1 = new Move() { Timestamp = System.DateTime.Now, Letter = "X", GameId = game.Id, }; // actually create objects for this

            using(var context = new TicTacToeContext(options))
            {
                context.Moves.Add(moves);
                context.Moves.Add(moves1);
                context.SaveChanges();
            }
        }
    }
}
