using Microsoft.AspNetCore.Mvc;

namespace megbook_core_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnderecoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Megnow");
        }
    }
}