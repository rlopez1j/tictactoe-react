using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AIL.TicTacToe.Models // change namespace 
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

        [Required]
        public ICollection<Moves> Moves{ get; set; }
    }
}
