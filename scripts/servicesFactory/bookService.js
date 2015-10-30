(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .service('bookService', BookService);

    BookService.$inject = [];

    /* @ngInject */
    function BookService() {

        this.addBook = function(newbook) {
            this.books.push(newbook);
        }

        this.books = [{
            "id": "1",
            "title": "Sachin Tendulkar",
            "author": "Alex Nelson",
            "imageUrl": "https://sheokhanda.files.wordpress.com/2012/03/sachin48.jpg?w=640",
            "altText": "This is alt text",
            "review": [{
                "name": "reader1",
                "rate": "1",
                "comment": "This is good21"
            }, {
                "name": "reader2",
                "rate": "5",
                "comment": "This is good11."
            }, {
                "name": "reader3",
                "rate": "3",
                "comment": "This is good31."
            }, {
                "name": "reader4",
                "rate": "2",
                "comment": "This is good41."
            }, {
                "name": "reader5",
                "rate": "1",
                "comment": "This is good51."
            }]
        }, {
            "id": "2",
            "title": "The Trophy",
            "author": "Scott Masterson",
            "imageUrl": "http://www.funwithlol.com/wp-content/uploads/2015/02/732.jpg",
            "altText": "This is alt text",
            "review": [{
                "name": "reader1",
                "rate": "4",
                "comment": "This is good21."
            }, {
                "name": "reader2",
                "rate": "5",
                "comment": "This is good11."
            }, {
                "name": "reader3",
                "rate": "2",
                "comment": "This is good31."
            }, {
                "name": "reader4",
                "rate": "3",
                "comment": "This is good41."
            }, {
                "name": "reader5",
                "rate": "4",
                "comment": "This is good51."
            }]
        }, {
            "id": "3",
            "title": "Team Player",
            "author": "Saurav Bhalotia",
            "imageUrl": "http://im.rediff.com/cricket/2012/jul/18slide1.jpg",
            "altText": "This is alt text",
            "review": [{
                "name": "reader",
                "rate": "4",
                "comment": "This is good21."
            }, {
                "name": "reader2",
                "rate": "5",
                "comment": "This is good11."
            }, {
                "name": "reader3",
                "rate": "5",
                "comment": "This is good31."
            }, {
                "name": "reader4",
                "rate": "4",
                "comment": "This is good41."
            }, {
                "name": "reader5",
                "rate": "5",
                "comment": "This is good51."
            }]
        }];
    }
})();
