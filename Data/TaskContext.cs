using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Models;
namespace TaskManagementAPI.Data
{
    public class TaskContext:DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) :
        base(options)
        { } 
        public DbSet<Models.Task> Tasks { get; set; }
    }
}
