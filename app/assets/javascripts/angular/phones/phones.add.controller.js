(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneAddCtrl', PhoneAddCtrl);
      

  PhoneAddCtrl.$inject = ['$scope','$resource', '$location', 'Phones', 'angularFileUpload'];

  function PhoneAddCtrl($scope, $resource, $location, Phones, FileUploader) {

      $scope.uploader = new FileUploader();

      console.log($scope.uploader);
	  $scope.save = function () {

		  if ($scope.phoneForm.$valid){
		  	$location.path('/');

		    Phones.addPhone();
		  }
	  }	  
  }

})();
