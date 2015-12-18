(function(angular) {
	'use strict';

	angular
	  .module('phonecatApp')
	  .factory('Phones', Phones);

	Phones.$inject = ['$http', '$routeParams'];

	function Phones($http, $routeParams) {				

		var data = {
			phones: []
		};

		function setPhones(){
			$http.get('/phones.json').then(function(response){
				data.phones = response.data;
			});
			
		}

		function getPhones(){
			return data;
		}

		function setPhone(){
			$http.get('/phones/' + $routeParams.phoneId + '.json').then(function(response){
				data.phones = response.data;
			});			
		}

		function getPhone(){

			return data;

		}
   	
   	function addPhone() {
		 	$http.post('/phones.json', {}).then(function (data) {
		 		data.phones = data.data;
		 		console.log($routeParams);
		 	});
		};


		// obj.addPhone = function (phone) {
		// 	return $http.post('/phones.json', phone).then(function (results) {
		// 		return results;
		// 	});
		// };

		// obj.deletePhone = function (id) {
		// 	return $http.delete('/phones/' + id + '.json').then(function (status) {
		// 		return status.data;
		// 	});
		// };

		return {
			getPhones: getPhones,
			setPhones: setPhones,
			getPhone: getPhone,
			setPhone: setPhone,
			addPhone: addPhone
		}									

	}
})(window.angular);