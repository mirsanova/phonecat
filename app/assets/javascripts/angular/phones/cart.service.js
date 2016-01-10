(function(angular) {
    'use strict';

    angular
        .module('phonecatApp')
        .service('cartService', cartService);

    function cartService() {
        var callbacks = [];
        var items = [];
        var a = [];
        var flag = true;

        var addItemToCart = function(item) {

            items.push(item);
            var it = {item: item, count: 1};

            for (var i = 0; i < a.length; i++){
                flag = true;

                if (a[i].item.id === item.id){
                    a[i].count++;
                    flag = false;
                    break;
                }

            }

            if (flag === true){
                a.push(it);
            }

            //notify if there are any listeners
            for (var i = 0; i < callbacks.length; i++)
                callbacks[i](a);
        }

        //register listener
        var onItemsAdded = function(callback) {
            callbacks.push(callback);
        }


        var getItems = function() {
            return a;
        }

        var getItemsCount = function() {
            var totalCount = 0;

            for (var i=0; i < a.length; i++) {
                totalCount += a[i].count;
            }
            return totalCount;
        }


        return {
            onItemsAdded: onItemsAdded,
            addItemToCart: addItemToCart,
            getItems: getItems,
            getItemsCount: getItemsCount
        }
    }
})(window.angular);