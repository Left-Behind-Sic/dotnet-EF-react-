using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace netReact.Models
{
  public class UpdateEmployeeViewModel
  {
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; }
    public string Department { get; set; } = string.Empty;
  }
}