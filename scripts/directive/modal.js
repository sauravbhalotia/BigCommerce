(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .directive('modal', ModalDirective);

    ModalDirective.$inject = [];

    /* @ngInject */
    function ModalDirective() {

        var ModalDirective = {
            restrict: 'E',
            templateUrl : 'scripts/partials/modal.html',
            link: link
        };

        return ModalDirective;

        function link(scope, element, attrs) {
            scope.$watch(attrs.visible, function(value) {
                if (value === true){
                    angular.element('modal').css('display', 'block');
                }
            });
        }
    }
})();

