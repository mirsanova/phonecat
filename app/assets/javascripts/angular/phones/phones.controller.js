(function(angular) {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('PhoneListCtrl', PhoneListCtrl);
      

  PhoneListCtrl.$inject = ['$scope','Phones'];   

  function PhoneListCtrl($scope, Phones) {
  	Phones.setPhones();
  	$scope.phones = Phones.getPhones();

  	// Phones.setPhones().then(function(response) {
   //    $scope.phones = Phones.getPhones();
   //  }, null);
  }

})(window.angular);

