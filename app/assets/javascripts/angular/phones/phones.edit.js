(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneEditCtrl', PhoneEditCtrl);
      

  PhoneEditCtrl.$inject = ['$scope','$resource', '$location', 'Phones'];   

  function PhoneEditCtrl($scope, $resource, $location, Phones) {
  	
    $scope.update = function(){    	
      if ($scope.phoneForm.$valid){
        $location.path('/');
         Phones.updatePhone(id, phone);
      }
    }; 
  }

})();
