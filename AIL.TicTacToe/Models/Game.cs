using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AIL.TicTacToe.Models
{
    public class Game
    {
        [Required]
        [KeyAttribute]
        public int Id { get; set; }

        [Required]
        public DateTime Date { get; set; } = DateTime.Now;

        [Required]
        public string Winner { get; set; }

        public List<Move> Moves { get; set; }
    }
}
