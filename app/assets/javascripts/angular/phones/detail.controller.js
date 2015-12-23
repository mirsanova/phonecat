(function(angular) {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneDetailCtrl', PhoneDetailCtrl);

  PhoneDetailCtrl.$inject = ['$scope', 'Phones', '$routeParams'];

  function PhoneDetailCtrl($scope, Phones, $routeParams) {
       
  	Phones.setPhone().then(function(response) {
      $scope.phone = Phones.getPhone();
    }, null);
  }

})(window.angular);

