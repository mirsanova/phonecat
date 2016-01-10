(function() {
    'use strict';

    angular
        .module('phonecatApp')
        .controller('CartOrder', CartOrder);

    CartOrder.$inject = ['$scope', 'cartService'];

    function CartOrder($scope, cartService){
        $scope.items = cartService.getItems();
        $scope.totalCount = cartService.getItemsCount();
    }

})();