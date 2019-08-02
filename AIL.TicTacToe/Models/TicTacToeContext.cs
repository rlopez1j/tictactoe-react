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

        public DbSet<Games> Games { get; set; }
        public DbSet<Moves> Moves { get; set; }
    }
}
