(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .controller('modalController', ModalController);

    ModalController.$inject = ['bookService', 'magazineService'];

    /* @ngInject */
    function ModalController(bookService, magazineService) {

        var modCtrl = this;
        activate();

        ////////////////
        function activate() {

            var modal = document.getElementsByTagName('modal')[0];

            modCtrl.toShow = false;
            modCtrl.label = {
                title : 'Title',
                author : 'Author',
                imageUrl : 'Image Link',
                category : 'Category'
            }

            modCtrl.options = ['Books', 'Magazine'];

            modCtrl.closeModal = function() {
                angular.element(modal).css('display','none');
            }

            modCtrl.formSave = function() {

                // if not then check category and add the item
                if (modCtrl.newReadItem.category === 'Books') {
                    bookService.addBook(modCtrl.newReadItem);
                } else {
                    magazineService.addMagazine(modCtrl.newReadItem);
                }
            }

            modCtrl.formReset = function() {
                var sample = {
                    title : '',
                    author : '',
                    imageUrl : '',
                    category: ''
                };
                modCtrl.newReadItem = sample;
            }

        }
    }
})();