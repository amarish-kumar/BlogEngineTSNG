var app;
(function (app) {
    var blogposts;
    (function (blogposts) {
        'use strict';
        var BlogPostController = (function () {
            function BlogPostController(blogPost) {
                if (blogPost) {
                    this.uniqueId = blogPost.uniqueId;
                    this.title = blogPost.title;
                    this.body = blogPost.body;
                    this.slug = blogPost.slug;
                    this.description = blogPost.description;
                    this.tags = blogPost.tags.join(',');
                    this.publishedDate = blogPost.publishedDate;
                }
            }
            BlogPostController.prototype.save = function () {
            };
            return BlogPostController;
        }());
        BlogPostController.$inject = ['blogPost'];
        angular
            .module('app.blogposts')
            .controller('app.blogposts.BlogPostController', BlogPostController);
    })(blogposts = app.blogposts || (app.blogposts = {}));
})(app || (app = {}));
//# sourceMappingURL=blogpost.controller.js.map