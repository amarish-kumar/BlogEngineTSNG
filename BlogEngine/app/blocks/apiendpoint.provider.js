var app;
(function (app) {
    var blocks;
    (function (blocks) {
        'use strict';
        var ApiEndPointProvider = (function () {
            function ApiEndPointProvider() {
            }
            ApiEndPointProvider.prototype.configure = function (baseUrl) {
                this.config = {
                    baseUrl: baseUrl
                };
            };
            ApiEndPointProvider.prototype.$get = function () {
                return this.config;
            };
            return ApiEndPointProvider;
        }());
        //Provider Registration. Make sure you are not suffixing provider name with provider here
        angular
            .module('app.blocks')
            .provider('app.blocks.ApiEndPoint', ApiEndPointProvider);
    })(blocks = app.blocks || (app.blocks = {}));
})(app || (app = {}));
//# sourceMappingURL=apiendpoint.provider.js.map