(function(angular) {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {
      console.log('Контроллер все телефоны');
      Phones.setPhones();
      $scope.phones = Phones.getPhones();

      // Phones.setPhones().then(function(response) {
      //    $scope.phones = Phones.getPhones();
      //  }, null);

      $scope.phoneStatusOptions = function (status) {
          return status ? 'В наличии' : 'Под заказ'
      };


      $scope.update = function (phone) {

          Phones.setPhoneForUpdate(phone);

          $scope.phone = Phones.getPhone();
          Phones.phoneUpdateStatus({phone: $scope.phone}).then(function () {
              $location.path('/');
          }, null);
      }
  }
})(window.angular);

