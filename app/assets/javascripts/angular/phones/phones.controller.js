(function(angular) {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {

    $scope.justRemove = function(phone) {
      console.log('1');
        Phones.deletePhone(phone);
        $scope.phones = Phones.getPhones();
        console.log($scope.phones );
    };

    Phones.setPhones(); 
    $scope.phones = Phones.getPhones();
   
  }

})(window.angular);

