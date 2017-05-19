(function () {
    'use strict';
    angular.module('app.blocks')
        .config(config);
    //Here, you can suffix with Provider as angular will look with provider suffix. This is angular angalogy not TS
    config.$inject = ['app.blocks.ApiEndPointProvider'];
    function config(apiEndpointProvider) {
        //Base URL has been set
        apiEndpointProvider.configure('/api');
    }
})();
//# sourceMappingURL=apiendpoint.config.js.map