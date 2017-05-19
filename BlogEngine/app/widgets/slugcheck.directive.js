//Since, directives are going to be self contained widgets, hence interface kind of stuffs are not required.
//Hence, will be writing directive via TS functions. But, in case if are willing to supply controller as well to directives, then it should be class
var app;
(function (app) {
    var widgets;
    (function (widgets) {
        'use strict';
        var SlugCheckController = (function () {
            function SlugCheckController($scope) {
                console.log('Scope Value:- ' + $scope);
            }
            return SlugCheckController;
        }());
        SlugCheckController.$inject = ['$scope'];
        //since, we are not using TS class here, hence angular registration can be done up above the function
        //In case of TS class, angular registration should always happen at the bottom of the class otherwise function won't get elevated
        angular
            .module('app.widgets')
            .directive('bgSlugCheck', slugCheck);
        slugCheck.$inject = ['app.services.BlogPostService'];
        function slugCheck(blogPostService) {
            var directive = {
                restrict: 'A',
                link: link,
                controller: SlugCheckController
            };
            //Link function returns void, you can refer in d.ts file in its defn
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