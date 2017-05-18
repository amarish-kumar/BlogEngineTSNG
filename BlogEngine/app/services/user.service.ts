module app.services {
    'use strict';

    //Since, services will be sharable component, hence its marked as export
    export interface IUserService {
        //IPromise service supports generics and hence can be mapped to types like shown below
        getById(uniqueId:string):ng.IPromise<IUser>;
    }

    //Interface, which represents an user object

   export  interface IUser {
        uniqueId: string;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        roles: string[];
        timezoneOffset: number;
        twitterUsername?: string;
        createDate?: number;
        modifiedDate?: number;
        socialNetworks:ISocialNetwork[];
   }

   export  interface ISocialNetwork {
        name: string;
        username:string;
    }
   class UserService implements IUserService {

       //since, we are inside class, hence we can use injectable via static way like
       static $inject = ['$http'];

       //Its marked as private as I wanted to use $http service within getByID function.
       constructor(private $http: ng.IHttpService) { }

       //With inject and ctor in place, we have angular wired up to deliver HTTP-Service to our class

       getById(uniqueId: string): angular.IPromise<IUser> {
           return this.$http.get('/api/users' + uniqueId)
               //Setting the returned client data scheme
               .then((response:ng.IHttpPromiseCallbackArg<IUser>):IUser => {
                   return response.data;
               });
       }
   }

    //Service Registration
    angular
        .module('app.services')
        .service('app.services.UserService', UserService);
}