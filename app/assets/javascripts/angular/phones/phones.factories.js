(function() {
	'use strict';

	angular
	  .module('phonecatApp')
	  .factory('Phones', Phones);

	Phones.$inject = ['$http'];

	function Phones($http) {				

		var obj = {};
		var arr = [];
		var res;
		var data = [];

		obj.getPhones = function(){
			$http.get('/phones.json').then(function(response){
				var phonesArr = {};

				phonesArr.phones = response.data;
				console.log(1);
				return phonesArr;
			}).then(function(phonesArr){
				data.phones = phonesArr;
				console.log('2');
			});

			console.log(3);
			
			return data;
		};

		obj.getPhone = function(phoneId){

			return $http.get('/phones/' + phoneId + '.json');

		};

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