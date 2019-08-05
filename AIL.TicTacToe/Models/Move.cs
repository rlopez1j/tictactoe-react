using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AIL.TicTacToe.Models
{
    public class Move
    {
        public int Id { get; set; }

        [Required]
        public DateTime Timestamp { get; set; } = DateTime.Now;

        [Required]
        public string Letter { get; set; }

        public int Index { get; set; }

        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}
