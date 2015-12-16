(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneAddCtrl', PhoneAddCtrl);
      

  PhoneAddCtrl.$inject = ['$scope','$resource', '$location', 'Phones'];   

  function PhoneAddCtrl($scope, $resource, $location, Phones) {

	  $scope.phone = { detail: [{ characteristic: '' }]}
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
