using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDo.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDo.Server.Controllers
{
    [Route("api/tasks")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private static List<Models.Task> _tasks = new List<Models.Task>
        {
            new Models.Task { Id = 1, Name = "Learn ASP.NET Core"},
            new Models.Task { Id = 2, Name = "Build an API", }
        };


        // GET: api/<TaskController>
        [HttpGet]
        public ActionResult<IEnumerable<Models.Task>> Get()
        {
            return Ok(_tasks); // Return all tasks
        }

        // GET api/<TaskController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var task = _tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound(); // If task not found, return 404
            }
            return Ok(task);
        }

        // POST api/<TaskController>
        [HttpPost]
        public ActionResult<Models.Task> Post(Models.Task task)
        {
            task.Id = _tasks.Max(t => t.Id) + 1; // Auto-increment task ID
            _tasks.Add(task);
            return Ok(task);
        }

        // PUT api/<TaskController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, Models.Task newTask)
        {
            var task = _tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound(); // If task not found, return 404
            }

            task.Name = newTask.Name;

            return Ok(task);
        }

        // DELETE api/<TaskController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var task = _tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound(); // If task not found, return 404
            }

            _tasks.Remove(task); // Remove task from list
            return NoContent();
        }
    }
}
