(function(angular) {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {

    // Phones.getPhones().then(function(data){
    //   $scope.phones = data.data;
    // });
    Phones.setPhones();
    $scope.phones = Phones.getPhones();
 

    // $scope.justRemove = function(phone) {

    //   Phones.deletePhone(phone.id);
    //   Phones.getPhones().then(function(data){

    //     $scope.phones = data.data;
        
    //   });   
    // }
   
  }

})(window.angular);

