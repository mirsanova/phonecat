(function() {
	'use strict';

	angular
	  .module('phonecatApp')
	  .factory('Phones', Phones);

	Phones.$inject = ['$http'];

	function Phones($http) {				

		var obj = {};

		obj.getPhones = function(){

			return $http.get('/phones.json');

			}

		obj.getPhone = function(phoneId){

			return $http.get('/phones/' + phoneId + '.json');

		}

		obj.addPhone = function (phone) {
			return $http.post('/phones.json', phone).then(function (results) {
				return results;
			});
		};

		obj.deletePhone = function (id) {
			return $http.delete('/phones/' + id + '.json').then(function (status) {
				return status.data;
			});
		};

		return obj;									

	}
})();