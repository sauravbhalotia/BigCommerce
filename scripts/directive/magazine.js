(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .directive('magazine', MagazineDirective);

    MagazineDirective.$inject = [];

    /* @ngInject */
    function MagazineDirective() {

        var MagazineDirective = {
            link: linkFun,
            restrict: 'E',
            templateUrl: "scripts/partials/magazine.html"
            // scope: {
            // }
        };
        return MagazineDirective;

        function linkFun(scope, element, attrs) {

        }
    }

})();