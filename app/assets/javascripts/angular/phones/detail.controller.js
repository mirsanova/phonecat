(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneDetailCtrl', PhoneDetailCtrl);

  PhoneDetailCtrl.$inject = ['$scope', 'Phones'];

  function PhoneDetailCtrl($scope, Phones) {

    

    Phones.getPhone().then(function(data){
      $scope.phone = data;
      console.log($scope.phone);
    });



    // $scope.phoneId = $routeParams.phoneId;
    

    // Phone.get({id: $routeParams.phoneId}, function(data) {
    //   $scope.phone = data;
      
    // });

  }

})();

