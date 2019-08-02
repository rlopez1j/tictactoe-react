using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AIL.TicTacToe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AIL.TicTacToe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicTacToeController : ControllerBase
    {
        private readonly TicTacToeContext _context;

        public TicTacToeController(TicTacToeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public object Get()
        {
           // get game list from context thingy
           // only send the relevant parts in json
           //var gamesList = _context.Games.

            return new { };
        }
    }
}