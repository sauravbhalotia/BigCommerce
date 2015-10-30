(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .controller('welcomeController', WelcomeController);

    WelcomeController.$inject = [];

    /* @ngInject */
    function WelcomeController() {
        var wbCtrl = this;

        activate();
        ////////////////

        function activate() {
            wbCtrl.toShow = true;
            wbCtrl.title = 'Welcome Back!';
            wbCtrl.showModal = false;
            wbCtrl.showModalOnButtonClick = showModelOnYBC;
        }

        // show Model on yes button click
        function showModelOnYBC() {
            wbCtrl.showModal = true;
            var modal = document.getElementsByTagName('modal')[0];
            angular.element(modal).css('display','block');
            angular.element(modal).removeClass('ng-hide');
        }
    }
})();
