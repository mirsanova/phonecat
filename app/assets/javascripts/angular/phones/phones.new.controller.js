(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneAddCtrl', PhoneAddCtrl);
      

  PhoneAddCtrl.$inject = ['$scope','$resource', '$location', 'Phones'];   

  function PhoneAddCtrl($scope, $resource, $location, Phones) {

	  $scope.phone = {}
	  // $scope.phone.detail = {}	  

		  $scope.save = function () {

			  if ($scope.phoneForm.$valid){
			    Phones.addPhone({phone: $scope.phone}, function(){
			    	console.log(phone);
			    	$location.path('/');
			    }, function(error){
			    	console.log(error)
			    });
			  }
		  }

	  
  }

})();
