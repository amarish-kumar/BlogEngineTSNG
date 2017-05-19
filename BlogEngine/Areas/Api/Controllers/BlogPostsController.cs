using System;
using System.Collections.Generic;
using System.Web.Http;
using BlogEngine.Models;
using BlogEngine.Services;


namespace BlogEngine.Areas.Api.Controllers
{
    [Authorize]
    [System.Web.Http.RoutePrefix("api/blogposts")]
    public class BlogPostsController : ApiController
    {
        readonly IBlogPostsService _blogPostsService;

        public BlogPostsController(IBlogPostsService blogPostsService)
        {
            _blogPostsService = blogPostsService;
        }

        public IEnumerable<BlogPost> Get()
        {
            return _blogPostsService.GetAll();
        }

        [Route("{uniqueId}")]
        public BlogPost Get(Guid uniqueId)
        {
            return _blogPostsService.Get(uniqueId);
        }

        public void Post(BlogPost value)
        {
            _blogPostsService.Create(value);
        }

        [Route("{uniqueId}")]
        public void Put(Guid uniqueId, BlogPost value)
        {
            _blogPostsService.Update(uniqueId, value);
        }

        [Route("{uniqueId}")]
        public void Delete(Guid uniqueId)
        {
            _blogPostsService.Delete(uniqueId);
        }

        [Route("slugisinuse/{slug}")]
        [System.Web.Mvc.HttpGet]
        public bool SlugIsInUse(string slug)
        {
            return _blogPostsService.SlugIsInUse(slug);
        }
    }
}