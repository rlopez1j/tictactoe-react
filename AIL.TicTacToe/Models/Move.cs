using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AIL.TicTacToe.Models
{
    public class Moves
    {
        [Required]
        [KeyAttribute]
        public int Id { get; set; }

        [Required]
        public DateTime Timestamp { get; set; } // maybe diff type?

        [Required]
        public int Games { get; set; }
    }
}
