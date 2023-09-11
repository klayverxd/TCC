using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CrudLaboratorio.Data;
using CrudLaboratorio.Models;

namespace CrudLaboratorio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComponenteController : ControllerBase
    {
        private readonly ComponenteDbContext _context;

        public ComponenteController(ComponenteDbContext context)
        {
            _context = context;
        }

        // GET: api/Componente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ComponenteModel>>> GetComponentes()
        {
          if (_context.Componentes == null)
          {
              return NotFound();
          }
            return await _context.Componentes.ToListAsync();
        }

        // GET: api/Componente/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ComponenteModel>> GetComponenteModel(int id)
        {
          if (_context.Componentes == null)
          {
              return NotFound();
          }
            var componenteModel = await _context.Componentes.FindAsync(id);

            if (componenteModel == null)
            {
                return NotFound();
            }

            return componenteModel;
        }

        // PUT: api/Componente/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComponenteModel(int id, ComponenteModel componenteModel)
        {
            if (id != componenteModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(componenteModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComponenteModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Componente
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ComponenteModel>> PostComponenteModel(ComponenteModel componenteModel)
        {
          if (_context.Componentes == null)
          {
              return Problem("Entity set 'ComponenteDbContext.Componentes'  is null.");
          }
            _context.Componentes.Add(componenteModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComponenteModel", new { id = componenteModel.Id }, componenteModel);
        }

        // DELETE: api/Componente/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComponenteModel(int id)
        {
            if (_context.Componentes == null)
            {
                return NotFound();
            }
            var componenteModel = await _context.Componentes.FindAsync(id);
            if (componenteModel == null)
            {
                return NotFound();
            }

            _context.Componentes.Remove(componenteModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComponenteModelExists(int id)
        {
            return (_context.Componentes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
