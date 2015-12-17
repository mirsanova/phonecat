(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {
console.log('1');
console.log(Phones.getPhones());
  // Phones.getPhones().then(function(successResponse){
  //     $scope.phones =  successResponse;

  //     console.log(successResponse);
  //   });

     // $scope.phones = Phones.getPhones();

    $scope.justRemove = function(phone) {

      Phones.deletePhone(phone.id);
      Phones.getPhones().then(function(data){

        $scope.phones = data.data;
        
      });   
    }
   
  }

})();

