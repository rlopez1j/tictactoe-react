using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AIL.TicTacToe.Models
{
    public class Games
    {
        [Required]
        [KeyAttribute]
        public int Id { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Winner { get; set; }

        public IList<Moves> Moves { get; set; }
    }
}
