var app;
(function (app) {
    var sitesettings;
    (function (sitesettings) {
        'use strict';
        var SiteSettingsController = (function () {
            //Function should go after constructor
            function SiteSettingsController() {
            }
            SiteSettingsController.prototype.save = function () { throw new Error("Not implemented"); };
            return SiteSettingsController;
        }());
        angular
            .module('app.sitesettings')
            .controller('app.sitesettings.SiteSettingsController', SiteSettingsController);
    })(sitesettings = app.sitesettings || (app.sitesettings = {}));
})(app || (app = {}));
//# sourceMappingURL=sitesettings.controller.js.map