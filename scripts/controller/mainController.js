(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .controller('MainController', MainController);

    MainController.$inject = [];

    /* @ngInject */
    function MainController() {
        var mCtrl = this;
        activate();

        ////////////////
        function activate() {
            mCtrl.headerTitle = 'My Books';
            mCtrl.toShow = false;

            var body = document.getElementsByTagName('body')[0],
                navBar = document.getElementsByTagName('nav')[0];

            mCtrl.onClick = function() {
                if (mCtrl.toShow === false){
                    mCtrl.toShow = true;
                    // it was not clear from screenshot what should happen upon on dropdown open.
                    angular.element(body).css('overflow','hidden');
                    angular.element(navBar).find('ul').css('display', 'block');
                } else {
                    mCtrl.toShow = false;
                    angular.element(body).css('overflow','initial');
                    angular.element(navBar).find('ul').css('display', 'none');
                }
            }

        }
    }
})();