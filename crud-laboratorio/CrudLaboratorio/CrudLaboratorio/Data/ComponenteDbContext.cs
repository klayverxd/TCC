using CrudLaboratorio.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudLaboratorio.Data
{
    public class ComponenteDbContext : DbContext
    {
        public ComponenteDbContext(DbContextOptions<ComponenteDbContext> options) : base(options)
        {

        }

        public DbSet<ComponenteModel> Componentes { get; set; }
    }
}
