(function() {
	'use strict';

	angular
	  .module('phonecatApp')
	  .factory('Phone', Phone)
	  .factory('Phones', Phones);

	Phone.$inject = ['$resource'];
	
	function Phone($resource) {

    return $resource('/phones/:id.json', {}, {
      show: {method:'GET'},
      update: {method:'PUT', params:{id:'@id'} },
      delete: {method:'DELETE', params:{id:'@id'} }

    });
	}

	Phones.$inject = ['$resource'];

	function Phones($resource) {

    return $resource('/phones.json', {}, {
      query: {method:'GET', isArray: true },
      create: {method:'POST'} 
    });
	}

})();