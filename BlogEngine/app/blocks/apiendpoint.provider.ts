module app.blocks {
    'use strict';

    export interface IApiEndPointConfig {
        baseUrl:string;
    }

    export interface IApiEndPointProvider {
        configure(baseUrl:string):void;
    }

    class ApiEndPointProvider implements ng.IServiceProvider, IApiEndPointProvider {
        config:IApiEndPointConfig;
        configure(baseUrl: string): void {
            this.config = {
                baseUrl: baseUrl
            };
        }
        $get(): IApiEndPointConfig {
            return this.config;
        }
    }

    //Provider Registration. Make sure you are not suffixing provider name with provider here
    angular
        .module('app.blocks')
        .provider('app.blocks.ApiEndPoint', ApiEndPointProvider);

}