using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AIL.TicTacToe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AIL.TicTacToe.Controllers
{
    [Route("api")]
    [ApiController]
    public class TicTacToeController : Controller
    {
        private readonly TicTacToeContext _context;

        public TicTacToeController(TicTacToeContext context)
        {
            _context = context;
        }

        [HttpGet("history")]
        public JsonResult HistoryList()
        {
            List<Games> game;
            // get game list from context thingy
            // only send the relevant parts in json
            using (_context)
            {
                game = _context.Games.ToList();
            }

            return Json(game);
        }

        [HttpPost("add-to-history")] // get body
        public void AddToHistoryList()
        {
            /* TODO:
            * create Game instance
            * add moves instances and add created Game instance as a FK
            */

            Games games;

            using (var reader = new StreamReader(Request.Body, System.Text.Encoding.UTF8, true, 1024, true))
            {
                // deserialize json data
            }


        }
    }
}