(function() {
  'use strict';

  angular
      .module('phonecatApp')
      .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['$scope','$http', '$location'];

  function ContactCtrl($scope, $http, $location){

  }

})();