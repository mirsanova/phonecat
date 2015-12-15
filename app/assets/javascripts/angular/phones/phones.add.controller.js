(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneAddCtrl', PhoneAddCtrl);

  PhoneAddCtrl.$inject = ['$scope','$resource', 'Phones', '$location'];

  function PhoneAddCtrl($scope, $resource, Phones, $location) {
	  $scope.phone = {}

	  $scope.save = function () {
		  if ($scope.phoneForm.$valid){

		    Phones.create({phone: $scope.phone}, function(){
		    	$location.path('/');
		    }, function(error){
		    	console.log(error)
		    });
		  }
	  }
  }

})();
