using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AIL.TicTacToe.Models
{
    public class TicTacToeContext : DbContext
    {
        public TicTacToeContext(DbContextOptions<TicTacToeContext> options) : base(options) { }

        public DbSet<Game> Games { get; set; }
        public DbSet<Move> Moves { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>()
                .HasKey(g => g.Id);
            modelBuilder.Entity<Move>()
                .HasOne(m => m.Game)
                .WithMany(g => g.Moves);
        }
    }
}
