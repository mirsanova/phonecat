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
  }

})();
