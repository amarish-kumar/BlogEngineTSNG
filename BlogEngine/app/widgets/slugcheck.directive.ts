//Since, directives are going to be self contained widgets, hence interface kind of stuffs are not required.
//Hence, will be writing directive via TS functions. But, in case if are willing to supply controller as well to directives, then it should be class

module app.widgets{
    'use strict';

    class SlugCheckController {
        static $inject = ['$scope'];
        constructor($scope: ng.IScope) {
            console.log('Scope Value:- '+$scope);
        }
    }
    //since, we are not using TS class here, hence angular registration can be done up above the function
    //In case of TS class, angular registration should always happen at the bottom of the class otherwise function won't get elevated
    angular
        .module('app.widgets')
        .directive('bgSlugCheck', slugCheck);

    slugCheck.$inject = ['app.services.BlogPostService'];
    function slugCheck(blogPostService: app.services.IBlogPostService): ng.IDirective {
        var directive = <ng.IDirective>{
            restrict: 'A',
            link: link,
            controller:SlugCheckController
        };

        //Link function returns void, you can refer in d.ts file in its defn
        function link(scope: ng.IScope, element: ng.IAugmentedJQuery): void {
            element.on('blur',
                (): void => {
                    blogPostService.checkSlugInUse(element.val())
                        .then((inUse:boolean):void=>
                    {
                        console.log(inUse);
                    });
        });
        }
        return directive;
    }
}