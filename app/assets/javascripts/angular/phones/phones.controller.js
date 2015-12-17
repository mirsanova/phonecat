(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {

    Phones.getPhones().then(function(data){
      $scope.phones = data.data;
    });

    $scope.justRemove = function(phone) {

      Phones.deletePhone(phone.id);
      Phones.getPhones().then(function(data){

        $scope.phones = data.data;
        
      });   
    }
   
  }

})();

