module app.layout {
    'use strict';

    interface INavigationScope {
        fullName:string
    }
    //Controller am not going to inject, hence it doesn't need to be exported.
    class NavigationController implements INavigationScope {
        fullName: string;

        //All DI will go into this $inject
        static $inject = ['currentUser',
        'app.services.UserService'];
        constructor(currentUser: ICurrentUser,
        userService:app.services.IUserService) {
            var vm = this;
            //Now, retrieve the same via service call, and then fetching the user's first and last name
           // vm.fullName = currentUser.fullName;
            userService.getById(currentUser.userId)
                .then((user: app.services.IUser): void => {
                    vm.fullName = user.firstName + ' ' + user.lastName;
                });
        }
    }

    //angular controller registration
    angular
        .module('app.layout')
        .controller('app.layout.NavigationController', NavigationController);
}