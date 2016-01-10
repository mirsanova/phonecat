(function(angular) {
    'use strict';

    angular
        .module('phonecatApp')
        .service('cartService', cartService);

    function cartService() {
        var callbacks = [];
        var items = [];
        var flag = true;

        this.addItemToCart = function(item) {

            var itemHash = {item: item, count: 1};

            for (var i = 0; i < items.length; i++){
                flag = true;

                if (items[i].item.id === item.id){
                    items[i].count++;
                    flag = false;
                    break;
                }

            }

            if (flag === true){
                items.push(itemHash);
            }

            //notify if there are any listeners

            for (var i = 0; i < callbacks.length; i++)
                callbacks[i](items);
        }
        
        //register listener
    
        this.onItemsAdded = function(callback) {
            callbacks.push(callback);
        }


        this.getItems = function() {
            return items;
        }

        this.getItemsCount = function() {
            var totalCount = 0;

            for (var i=0; i < items.length; i++) {
                totalCount += items[i].count;
            }
            return totalCount;
        }

    }
})(window.angular);