(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneEditCtrl', PhoneEditCtrl);
      

  PhoneEditCtrl.$inject = ['$scope','$resource', '$location', 'Phones', '$routeParams'];   

  function PhoneEditCtrl($scope, $resource, $location, Phones, $routeParams) {
  console.log('Контроллер апдейт');
  	Phones.setPhone().then(function() {
      $scope.phone = Phones.getPhone();
    }, null);

    $scope.update = function(){

      if ($scope.phoneForm.$valid){
      	Phones.updatePhone({phone: $scope.phone}).then(function() {
          $location.path('/');
        }, null);
      }
    }; 
  }

})();
