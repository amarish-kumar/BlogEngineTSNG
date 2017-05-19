using System.Collections.Generic;
using System.Web.Http;
using BlogEngine.Services;

namespace BlogEngine.Areas.Api.Controllers
{
    [RoutePrefix("api/roles")]
    public class RolesController : ApiController
    {
        readonly IRolesService _rolesService;

        public RolesController(IRolesService roleService)
        {
            _rolesService = roleService;
        }
        
        public IEnumerable<string> Get()
        {
            return _rolesService.GetAll();
        }
    }
}