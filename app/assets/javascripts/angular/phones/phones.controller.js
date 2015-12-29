(function(angular) {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {

    Phones.setPhones();
    $scope.phones = Phones.getPhones();

    $scope.phoneStatusOptions = function (status) {
      return status ? 'В наличии' : 'Под заказ'
    };

    $scope.update = function (phone) {
      Phones.phoneUpdateStatus(phone);
    }
  }


})(window.angular);

