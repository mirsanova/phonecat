(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneDetailCtrl', PhoneDetailCtrl);

  PhoneDetailCtrl.$inject = ['$scope','$http', '$location', '$routeParams', 'Phone'];

  function PhoneDetailCtrl($scope, $http, $location, $routeParams, Phone) {
    $scope.phoneId = $routeParams.phoneId;
    

    Phone.get({id: $routeParams.phoneId}, function(data) {
      $scope.phone = data;
      
    });

  }

})();

