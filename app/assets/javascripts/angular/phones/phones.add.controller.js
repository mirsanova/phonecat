(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneAddCtrl', PhoneAddCtrl);
      

  PhoneAddCtrl.$inject = ['$scope','$resource', '$location', 'Phones'];   

  function PhoneAddCtrl($scope, $resource, $location, Phones) {

	  // $scope.phones = {}

		  $scope.save = function () {

			  if ($scope.phoneForm.$valid){
			  	$location.path('/');
			    Phones.addPhone();
			  }
		  }	  
  }

})();
