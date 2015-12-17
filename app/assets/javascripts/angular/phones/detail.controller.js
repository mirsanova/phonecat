(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneDetailCtrl', PhoneDetailCtrl);

  PhoneDetailCtrl.$inject = ['$scope', 'Phones', '$routeParams'];

  function PhoneDetailCtrl($scope, Phones, $routeParams) {     

    Phones.getPhone($routeParams.phoneId).then(function(data){

      $scope.phone = data.data;

    });
  }

})();

