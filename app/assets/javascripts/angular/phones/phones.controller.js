(function(angular) {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {

    // $scope.justRemove = function(phone) {
    //   Phones.deletePhone(phone);           
    // }

    Phones.setPhones(); 
    $scope.phones = Phones.getPhones();
   
  }

})(window.angular);

