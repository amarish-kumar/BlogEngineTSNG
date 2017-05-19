((): void => {
    'use strict';

    angular.module('app.blocks')
        .config(config);

    //Here, you can suffix with Provider as angular will look with provider suffix. This is angular angalogy not TS
    config.$inject = ['app.blocks.ApiEndPointProvider'];
    function config(apiEndpointProvider: app.blocks.IApiEndPointProvider): void {
        //Base URL has been set
        apiEndpointProvider.configure('/api');
    }
})();