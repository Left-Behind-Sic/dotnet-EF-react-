using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using netReact.Models.Domain;

namespace netReact.Data
{
  public class MVCDemoDbContext : DbContext
  {
    public MVCDemoDbContext(DbContextOptions options) : base(options)
    {
    }
    public DbSet<Employee> Employees { get; set; }
  }
}