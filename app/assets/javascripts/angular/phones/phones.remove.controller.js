(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneRemoveCtrl', PhoneRemoveCtrl);
      

  PhoneRemoveCtrl.$inject = ['$scope','$http', '$location', 'Phone'];   

  function PhoneRemoveCtrl($scope, $http, $location, Phone) {
    $scope.justRemove = function(phone) {
      console.log('1');
        //Phone.deletePhone(phone);
        // $scope.phones = Phones.getPhones();
        console.log($scope.phones );
    };
  };

    //$scope.deletePhone = function (phoneId) {
    //  if (confirm("Are you sure you want to delete this phone?")){
    //    Phone.delete({ id: phoneId }, function(){
    //      $scope.phones = Phone.query();
    //      $location.path('/');
    //    });
    //  }
    //};
  

})();