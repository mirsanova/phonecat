(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneAddCtrl', PhoneAddCtrl);
      

  PhoneAddCtrl.$inject = ['$scope','$resource', '$location', 'Phones', 'FileUploader'];

  function PhoneAddCtrl($scope, $resource, $location, Phones, FileUploader) {

      $scope.phone = {
        name : null,
        description : null,
        status : false,
        detail : {characteristic : null}
      };      

      $scope.uploader = new FileUploader({
      url: '/phones',
      queueLimit: 1,
      removeAfterUpload: true,
      onSuccessItem: function(item, response, status, headers) {

      },
      onErrorItem: function(item, response, status, headers) {
      },
      onBeforeUploadItem: function(item) {
        item.formData.push({"phone": angular.toJson($scope.phone)});
      }
      });


		  $scope.save = function () {
			  if ($scope.phoneForm.$valid){
          // console.log("jkhkjhkj");
          $scope.uploader.uploadAll();
			  	$location.path('/');
			   // Phones.addPhone({phone: $scope.phone});
			  }
		  }	  
  }

})();
