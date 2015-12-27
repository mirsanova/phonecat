(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneAddCtrl', PhoneAddCtrl);
      

  PhoneAddCtrl.$inject = ['$scope','$resource', '$location', 'Phones', 'FileUploader'];

  function PhoneAddCtrl($scope, $resource, $location, Phones, FileUploader) {

      //$scope.uploader = new FileUploader({
      //    url: ''
      //});

      $scope.phone = {};

      $scope.uploader = new FileUploader({
          url: '/phones',
          queueLimit: 1,
          removeAfterUpload: true,
          onSuccessItem: function(item, response, status, headers) {

          },
          onErrorItem: function(item, response, status, headers) {
          },
          onBeforeUploadItem: function(item) {
              item.formData.push($scope.phone);
          }
      });


		  $scope.save = function () {

              $scope.uploader.uploadAll();
			  //if ($scope.phoneForm.$valid){
               //   //$scope.uploader.uploadAll();
			  //	$location.path('/');
			  //  Phones.addPhone({phone: $scope.phone});
			  //}
		  }	  
  }

})();
