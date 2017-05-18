var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var UserService = (function () {
            //Its marked as private as I wanted to use $http service within getByID function.
            function UserService($http) {
                this.$http = $http;
            }
            //With inject and ctor in place, we have angular wired up to deliver HTTP-Service to our class
            UserService.prototype.getById = function (uniqueId) {
                return this.$http.get('/api/users' + uniqueId)
                    .then(function (response) {
                    return response.data;
                });
            };
            return UserService;
        }());
        //since, we are inside class, hence we can use injectable via static way like
        UserService.$inject = ['$http'];
        //Service Registration
        angular
            .module('app.services')
            .service('app.services.UserService', UserService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=user.service.js.map