(function() {
    'use strict';

    angular
        .module('phonecatApp')
        .controller('CartCtrl', CartCtrl);

    CartCtrl.$inject = ['$scope', 'cartService'];

    function CartCtrl($scope, cartService){
        $scope.totalCount=0;

        //subscribe items added callback
        cartService.onItemsAdded(function(items){
            $scope.totalCount=0;

            for (var i=0; i < items.length; i++) {
                $scope.totalCount += items[i].count;
            }
        });
    }

})();