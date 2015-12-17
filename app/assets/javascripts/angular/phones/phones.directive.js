(function() {
    'use strict';

    angular
        .module('phonecatApp')
        .directive('justRemove', justRemove);

    function justRemove () {
        return function(scope, element, attributes) {
                element.bind("$destroy", function() {
                    console.log("element removed");
                });
            }

    }
})();



