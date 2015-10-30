(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .directive('book', BookDirective);

    BookDirective.$inject = [];

    /* @ngInject */
    function BookDirective() {

        var BookDirective = {

            link: linkFun,
            restrict: 'E',
            templateUrl : "scripts/partials/books.html"
        };
        return BookDirective;

        function linkFun(scope, element, attrs) {

        }
    }

})();