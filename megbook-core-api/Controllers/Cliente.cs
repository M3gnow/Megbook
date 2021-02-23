using Microsoft.AspNetCore.Mvc;

namespace megbook_core_api.Controllers
{
    [ApiController]
    [Route("[controller]/")]
    public class ClienteController : ControllerBase
    {
        [Route("big")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Big");
        }
    }
}