(function () {
    'use strict';
    angular.module('app.blogposts')
        .config(config);
    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/admin/blogposts/newpost', {
            template: '<div>New Post</div>',
            controller: function () { },
            controllerAs: 'vm'
        });
    }
})();
//# sourceMappingURL=blogposts.routes.js.map