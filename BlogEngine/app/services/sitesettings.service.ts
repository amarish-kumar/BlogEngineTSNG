module app.services {
    import IApiEndPointConfig = app.blocks.IApiEndPointConfig;
    'use strict';

    export interface ISiteSettingsService {
        
    }

    class SiteSettingsService implements  ISiteSettingsService {
        constructor(private $http: ng.IHttpService, private apiEndPoint:IApiEndPointConfig) {}
    }

    //Injection
    factory.$inject = ['$http','app.blocks.ApiEndPoint'];
    //As factory returns newed up instance
    function factory($http: ng.IHttpService, apiEndPoint: IApiEndPointConfig):ISiteSettingsService {
        return new SiteSettingsService($http,apiEndPoint);
    }

    //angular registration
    angular
        .module('app.services')
        .factory('app.services.SiteSettingsService', factory);
}