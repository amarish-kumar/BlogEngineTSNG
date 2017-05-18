((): void => {
    'use strict';

    angular.module('app.blogposts')
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when('/admin/blogposts/newpost',
            {
                template: '<div>New Post</div>',
                controller: (): void => { },
                controllerAs: 'vm'
            });
    }
})();