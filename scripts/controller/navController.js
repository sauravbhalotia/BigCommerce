(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .controller('navController', NavController);

    NavController.$inject = ['titleService'];

    /* @ngInject */
    function NavController(titleService) {
        var nCtrl = this;

        activate();
        ////////////////

        function activate() {
            nCtrl.allTitle = titleService.allTitles;
        }
    }
})();