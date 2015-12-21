(function(angular) {
  'use strict';
  angular
    .module('phonecatApp')
    .directive('justRemove', justRemove);

    justRemove.$inject = ['Phones'];

    function justRemove (Phones) {

      return function(scope, element, attributes) {

    	element.bind("mouseenter", function() {
        element.prepend('<a href="" id="delete-item-times"><i class="fa fa-times" ></i></a>');
        $( '#delete-item-times').click(function(e,phone){
          e.preventDefault();
          Phones.deletePhone(scope.phone);
        });
      });

      element.bind("mouseleave", function(scope, element, attrs) {
      	$( '#delete-item-times' ).remove();  
      });
    }
  } 
})(window.angular);