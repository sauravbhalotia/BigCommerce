(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .directive('navigation', NavigationDirective);

    NavigationDirective.$inject = [];

    /* @ngInject */
    function NavigationDirective() {

        var NavigationDirective = {
            link: linkFun,
            restrict: 'E', // Only as an element
            templateUrl: 'scripts/partials/navigation.html'
        };

        return NavigationDirective;

        function linkFun(scope, element, attrs) {
        }
    }
})();