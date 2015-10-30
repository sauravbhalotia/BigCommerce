(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .controller('magazineController', MagazineController);

    MagazineController.$inject = ['magazineService'];

    /* @ngInject */
    function MagazineController(magazineService) {
        var magCtrl = this;
        activate();

        ////////////////
        function activate() {
            magCtrl.Magazines = magazineService.magazines;
        }
    }
})();