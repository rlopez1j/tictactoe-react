using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AIL.TicTacToe.Models
{
    public class CreateGameHistoryModel
    {
        public string Winner { get; set; }
        public List<Move> Moves { get; set; }
    }
}
