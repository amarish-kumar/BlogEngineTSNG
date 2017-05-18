module app.sitesettings {
    'use strict';

    interface ISiteSettingsScope {
        title: string;
        description: string;
        themeNames: string[];
        themeName: string;
        //save:Function; // This will not tell signature, but a function type. or
        //save:()=>void; //This is lamba implementation says doesn't return anything or
        save():void;
    }

    class SiteSettingsController implements  ISiteSettingsScope {
        title: string;
        description: string;
        themeNames: string[];
        themeName: string;

        //Function should go after constructor
        constructor() {}

        save(): void { throw new Error("Not implemented"); }
    }

    angular
        .module('app.sitesettings')
        .controller('app.sitesettings.SiteSettingsController', SiteSettingsController);
}