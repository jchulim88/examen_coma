using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd
{
    public class ApplicationDbContext: DbContext
    {
        //contructor
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Cliente> Cliente { get; set; }
    }
}
