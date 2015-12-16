(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','$http', '$location', 'Phone'];   

  function PhoneListCtrl($scope, $http, $location, Phone) {

    Phone.query(

    {phoneId: 'phones'}, 

    function(data) {
      $scope.phones = data;
    });

    $scope.deletePhone = function (phoneId) {
      if (confirm("Are you sure you want to delete this phone?")){
        Phone.delete({ id: phoneId }, function(){
          $scope.phones = Phone.query();
          $location.path('/');
        });
      }
    };
  }

})();
