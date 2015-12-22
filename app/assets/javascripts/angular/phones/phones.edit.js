(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneEditCtrl', PhoneEditCtrl);
      

  PhoneEditCtrl.$inject = ['$scope','$resource', '$location', 'Phones', '$routeParams'];   

  function PhoneEditCtrl($scope, $resource, $location, Phones, $routeParams) {

  	Phones.setPhone().then(function(response) {
      $scope.phones = Phones.getPhone();
    }, null);
    // Phones.setPhone();
    $scope.update = function(){    	
      if ($scope.phoneForm.$valid){
              
      	Phones.updatePhone($scope.phones);
        $location.path('/');
      }
    }; 
  }

})();
