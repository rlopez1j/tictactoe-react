using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AIL.TicTacToe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

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
        public List<Game> HistoryList()
        { 
           return _context.Games.ToList();
        }

        [HttpGet("history/{id}")]
        public Game GetHistoryById(int id)
        {
            // do validation
            return _context.Games.Include(g => g.Moves).Single(m => m.Id == id);
        }

        [HttpPost("add-to-history")] // get body
        public IActionResult AddToHistoryList([FromBody] Game model)
        {
            
            if (!ModelState.IsValid) return BadRequest("Invalid input");

            _context.Games.Add(model);
            _context.SaveChanges();

            return Ok();
        }

    }
}