(function() {

    'use strict';

    angular
        .module('CA_FE_BC')
        .directive('welcome', WelcomeDirective);

    WelcomeDirective.$inject = [];

    /* @ngInject */
    function WelcomeDirective() {

        var WelcomeDirective = {
            link: link,
            restrict: 'E', // only as an element
            templateUrl: "scripts/partials/welcomeBack.html",
        };
        return WelcomeDirective;

        function link(scope, element, attrs) {
        }
    }

})();