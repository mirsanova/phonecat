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




    // Phone.query(

    // {phoneId: 'phones'}, 

    // function(data) {
    //   $scope.phones = data;
    // });

    // $scope.justRemove = function(phone) {
    //     Phone.delete({ id: phone.id }, function(){
    //       $scope.phones = Phone.query();
    //       $location.path('/');
    //     });
    // };

    //$scope.deletePhone = function (phoneId) {
    //  if (confirm("Are you sure you want to delete this phone?")){
    //    Phone.delete({ id: phoneId }, function(){
    //      $scope.phones = Phone.query();
    //      $location.path('/');
    //    });
    //  }
    //};
  }

})();

