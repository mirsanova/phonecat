(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('DeletePhoneCtrl', DeletePhoneCtrl);
      

  DeletePhoneCtrl.$inject = ['$scope','$http', '$location', 'Phone' ];   

    function DeletePhoneCtrl($scope, $http, $location, Phone) {
      console.log("gjhghjg");
     if (confirm("Are you sure you want to delete this phone?")){
        Phone.delete({ id: phoneId }, function(){
          $scope.phone = Phones.query();
          $location.path('/');
        });
      }
    };

})();