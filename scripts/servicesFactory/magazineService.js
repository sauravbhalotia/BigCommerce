(function() {
    'use strict';

    angular
        .module('CA_FE_BC')
        .service('magazineService', MagazineService);

    MagazineService.$inject = [];

    /* @ngInject */
    function MagazineService() {

        this.addMagazine = function(newMagazine) {
            this.magazines.push(newMagazine);
        }

        this.magazines = [{
            "id": "21",
            "title": "Top 10 Australian Beaches ",
            "rating": "Number 10",
            "imageUrl": "http://i3.mirror.co.uk/incoming/article2357000.ece/ALTERNATES/s615/Indian-cricketer-Sachin-Tendulkar.jpg",
            "altText": "This is alt text",
            "location": {
                "address1": "Whiteheaven Beach",
                "city": "Whitsunday Island",
                "state": "Whitsunday Islands"
            }
        }, {
            "id": "22",
            "title": "Lake Tahoe",
            "rating": "Number 8",
            "imageUrl": "http://www.timesofoman.com/uploads/imported_images/2015/06/28/dtl_6_1_2015_9_51_23.gif",
            "altText": "This is alt text",
            "location": {
                "address1": "Stinson Beach",
                "city": "San Francisco",
                "state": "California"
            }
        }, {
            "id": "24",
            "title": "Yosemite",
            "rating": "Number 2",
            "imageUrl": "http://www.timesofoman.com/uploads/imported_images/2015/06/28/dtl_6_1_2015_9_51_23.gif",
            "altText": "This is alt text",
            "location": {
                "address1": "Ocean Beach",
                "city": "San Francisco",
                "state": "California"
            }
        }];
    }
})();
