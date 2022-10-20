using Microsoft.AspNetCore.Mvc;
using netReact.Data;
using netReact.Models;
using netReact.Models.Domain;

namespace netReact.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class EmployeesController : Controller
  {
    private readonly MVCDemoDbContext dbContext;
    public EmployeesController(MVCDemoDbContext dbContext)
    {
      this.dbContext = dbContext;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      var result = await dbContext.Employees.ToListAsync();
      return Ok(result);
    }

    [HttpGet("GetOne")]
    public async Task<ActionResult<Employee>> GetOneItem(Guid id)
    {
      var item = await dbContext.Employees.FindAsync(id);
      if (item != null)
      {
        return Ok(item);
      }
      return NotFound("Id not found");
    }

    [HttpPost]
    public async Task<IActionResult> Add(AddEmployeeViewModel request)
    {
      var card = new Employee()
      {
        Id = new Guid(),
        Name = request.Name,
        Email = request.Email,
        DateOfBirth = request.DateOfBirth,
        Department = request.Department
      };
      await dbContext.Employees.AddAsync(card);
      await dbContext.SaveChangesAsync();
      return Ok(card);
    }

    [HttpPut("Update")]
    public async Task<ActionResult<Employee>> Update(Guid id, UpdateEmployeeViewModel request)
    {
      var item = await dbContext.Employees.FindAsync(id);
      if (item != null)
      {
        item.Name = request.Name;
        item.Email = request.Email;
        item.DateOfBirth = request.DateOfBirth;
        item.Department = request.Department;

        await dbContext.SaveChangesAsync();
        return Ok(item);
      }
      return NotFound("no response id");
    }

    [HttpDelete("Delete")]
    public async Task<ActionResult<Employee>> DeleteAsync(Guid id)
    {
      var item = await dbContext.Employees.FindAsync(id);
      if (item != null)
      {
        dbContext.Remove(item);
        await dbContext.SaveChangesAsync();
        return Ok(item);
      }
      return NotFound("no response id");
    }

  }
}