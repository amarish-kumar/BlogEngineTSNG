//Since, directives are going to be self contained widgets, hence interface kind of stuffs are not required.
//Hence, will be writing directive via TS functions. But, in case if are willing to supply controller as well to directives, then it should be class
//since, we are not using TS class here, hence angular registration can be done up above the function
//In case of TS class, angular registration should always happen at the bottom of the class otherwise function won't get elevated
var app;
(function (app) {
    var widgets;
    (function (widgets) {
        'use strict';
        var SlugCheckController = (function () {
            function SlugCheckController(blogPostService) {
                this.blogPostService = blogPostService;
            }
            SlugCheckController.prototype.checkSlugInUse = function (slug) {
                return this.blogPostService.checkSlugInUse(slug);
            };
            return SlugCheckController;
        }());
        SlugCheckController.$inject = ['app.services.BlogPostService'];
        var SlugCheckDirective = (function () {
            function SlugCheckDirective() {
                this.restrict = 'A';
                this.controller = SlugCheckController;
            }
            SlugCheckDirective.instance = function () {
                return new SlugCheckDirective;
            };
            SlugCheckDirective.prototype.link = function (scope, element, attributes, controller) {
                element.on('blur', function () {
                    controller.checkSlugInUse(element.val())
                        .then(function (inUse) {
                        console.log(inUse);
                    });
                });
            };
            return SlugCheckDirective;
        }());
        angular
            .module('app.widgets')
            .directive('blSlugCheck', SlugCheckDirective.instance);
        slugCheck.$inject = ['app.services.BlogPostService'];
        function slugCheck(blogPostService) {
            var directive = {
                restrict: 'A',
                link: link,
                controller: SlugCheckController
            };
            function link(scope, element) {
                element.on('blur', function () {
                    blogPostService.checkSlugInUse(element.val())
                        .then(function (inUse) {
                        console.log(inUse);
                    });
                });
            }
            return directive;
        }
    })(widgets = app.widgets || (app.widgets = {}));
})(app || (app = {}));
//# sourceMappingURL=slugcheck.directive.js.map