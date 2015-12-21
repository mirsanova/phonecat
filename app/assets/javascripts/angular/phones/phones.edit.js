(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneEditCtrl', PhoneEditCtrl);
      

  PhoneEditCtrl.$inject = ['$scope','$resource', '$location', 'Phones', '$routeParams'];   

  function PhoneEditCtrl($scope, $resource, $location, Phones, $routeParams) {

  	Phones.setPhone();
    $scope.phones = Phones.getPhone();
    console.log($scope.phones);
    $scope.update = function(){    	
      if ($scope.phoneForm.$valid){
      	Phones.updatePhone($scope.phones);
        $location.path('/');
         
         // console.log($scope.phones);
      }
    }; 
  }

})();
