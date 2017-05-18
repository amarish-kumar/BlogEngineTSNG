var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        //Controller am not going to inject, hence it doesn't need to be exported.
        var NavigationController = (function () {
            function NavigationController(currentUser, userService) {
                var vm = this;
                //Now, retrieve the same via service call, and then fetching the user's first and last name
                // vm.fullName = currentUser.fullName;
                userService.getById(currentUser.userId)
                    .then(function (user) {
                    vm.fullName = user.firstName + ' ' + user.lastName;
                });
            }
            return NavigationController;
        }());
        //All DI will go into this $inject
        NavigationController.$inject = ['currentUser',
            'app.services.UserService'];
        //angular controller registration
        angular
            .module('app.layout')
            .controller('app.layout.NavigationController', NavigationController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
//# sourceMappingURL=navigation.controller.js.map