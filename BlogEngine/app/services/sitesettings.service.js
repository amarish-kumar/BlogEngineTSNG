var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var SiteSettingsService = (function () {
            function SiteSettingsService($http, apiEndPoint) {
                this.$http = $http;
                this.apiEndPoint = apiEndPoint;
            }
            return SiteSettingsService;
        }());
        //Injection
        factory.$inject = ['$http', 'app.blocks.ApiEndPoint'];
        //As factory returns newed up instance
        function factory($http, apiEndPoint) {
            return new SiteSettingsService($http, apiEndPoint);
        }
        //angular registration
        angular
            .module('app.services')
            .factory('app.services.SiteSettingsService', factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=sitesettings.service.js.map