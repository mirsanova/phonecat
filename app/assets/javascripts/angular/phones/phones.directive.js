(function() {
  'use strict';
  angular
    .module('phonecatApp')
    .directive('justRemove', justRemove);

  function justRemove () {
    return function(scope, element, attributes) {

    	var box = document.getElementById( 'phone-box' );
      
    	element.bind("mouseenter", function() {
        element.prepend('<a href="" id="delete-item-times" ng-click="justRemove(phone)"><i class="fa fa-times" ></i></a>');
      });

      element.bind("mouseleave", function(scope, elt, attrs) {
      	var el = document.getElementById( 'delete-item-times' );
            el.remove();  
      });
    }
} })();