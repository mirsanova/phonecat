(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneRemoveCtrl', PhoneRemoveCtrl);
      

  PhoneRemoveCtrl.$inject = ['$scope','$http', '$location', 'Phone'];   

  function PhoneRemoveCtrl($scope, $http, $location, Phone) {
    $scope.justRemove = function(phone) {
        Phone.delete({ id: phone.id }, function(){
          $scope.phones = Phone.query();
          $location.path('/');
        });
    };

    //$scope.deletePhone = function (phoneId) {
    //  if (confirm("Are you sure you want to delete this phone?")){
    //    Phone.delete({ id: phoneId }, function(){
    //      $scope.phones = Phone.query();
    //      $location.path('/');
    //    });
    //  }
    //};
  }

})();