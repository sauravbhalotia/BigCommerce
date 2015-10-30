(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .controller('bookController', BookController);

    BookController.$inject = ['bookService'];

    /* @ngInject */
    function BookController(bookService) {
        var bCtrl = this;
        activate();

        ////////////////
        function activate() {
            bCtrl.Books = bookService.books;
        }
    }
})();