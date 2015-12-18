(function() {
  'use strict';
  angular
    .module('phonecatApp')
    .directive('justRemove', justRemove);

  function justRemove () {
    return function(scope, element, attributes) {

    	var box = document.getElementById( 'phone-box' );
    	var times;

    	element.bind("mouseover", function() {
        element.prepend('<a href="" id="times"><i class="fa fa-times" ></i></a>');
        times = box.children[0];               
                       
      });
      element.bind("mouseleave", function(element) {
      	var el = document.getElementById( 'times' );
      	// element.parentNode.removeChild( el );
      parent = element;
        // element.remove(times);
        parent.removeChild();
      
                       
      });
    }
} })();