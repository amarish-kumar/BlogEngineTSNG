interface IAppCokies {
    userId:string;
}
((): void => {
    'use strict';
    angular
        .module('app')
        .run(run);

    run.$inject = ['$rootScope','$cookies','currentUser'];
    function run($rootScope: ng.IRootScopeService,
        $cookies: IAppCokies,
    currentUser:ICurrentUser): void {
        $rootScope.$on('$routeChangeError',
            (): void => {

            });

        //Now, get rid off local instance, rather get userid from ICurrentUser
        /*var userId = $cookies.userId;*/
        //Reading the logged in user cookie value and storing it locally.
        currentUser.userId = $cookies.userId;
    }
})();