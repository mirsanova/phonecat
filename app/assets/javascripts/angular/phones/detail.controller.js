(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneDetailCtrl', PhoneDetailCtrl);

  PhoneDetailCtrl.$inject = ['$scope','$http', '$location', '$routeParams', 'Phone'];

  function PhoneDetailCtrl($scope, $http, $location, $routeParams, Phone) {
    $scope.id = $routeParams.id;

    Phone.get({id: $routeParams.id}, function(data) {
      $scope.phone = data;
    });

  }

})();