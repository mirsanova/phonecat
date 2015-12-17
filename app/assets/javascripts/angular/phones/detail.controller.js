(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneDetailCtrl', PhoneDetailCtrl);

  PhoneDetailCtrl.$inject = ['$scope', 'Phones', '$routeParams'];

  function PhoneDetailCtrl($scope, Phones, $routeParams) {

     console.log($routeParams.phoneId);

    Phones.getPhone($routeParams.phoneId).then(function(data){
      $scope.phone = data.data;
      console.log($scope.phone);
    });

 
        // Phones.getPhones().then(function(data){
        // $scope.phones = data.data;

    // $scope.phoneId = $routeParams.phoneId;
    

    // Phone.get({id: $routeParams.phoneId}, function(data) {
    //   $scope.phone = data;
      
    // });

  }

})();

