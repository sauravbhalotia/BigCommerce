(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .service('titleService', TitleService);

    TitleService.$inject = ['bookService', 'magazineService'];

    /* @ngInject */
    function TitleService(bookService, magazineService) {

        var booksTitle = getTitles(bookService.books),
            magazinesTitle = getTitles(magazineService.magazines);

        this.booksTitles = booksTitle;
        this.magazinesTitles = magazinesTitle;
        this.allTitles = booksTitle.concat(magazinesTitle);

        function getTitles(from) {
            var result = [];
            for(var i = 0; i < from.length; i++) {
                var item = from[i];
                result.push(item.title);
            }
            return result;
        }
    }
})();