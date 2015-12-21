(function(angular) {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {

    //$scope.justRemove = function(phone) {
    //  console.log('1');
    //    Phones.deletePhone(phone);
    //    $scope.phones = Phones.getPhones();
    //    console.log($scope.phones );
    //};
    //$scope.buttonText = (customerID > 0) ? 'Update Customer' : 'Add New Customer';
    //ng-init="status = phone.status ? 'Есть в наличии' : 'Под заказ'"
    Phones.setPhones(); 
    $scope.phones = Phones.getPhones();
    console.log($scope.phones.data);
   
  }

})(window.angular);

