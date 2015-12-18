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
   	
   	function addPhone(phone) {
		 	$http.post('/phones.json', phone).then(function (data) {
		 		data.phones = data.data;
		 		console.log(data.phones);
		 	});
		};

		function deletePhone(phone) {
		 	return $http.delete('/phones/' + phone.id + '.json').then(function (status) {		 		
		 		return status.data;
		 	});
		};
		
		return {
			getPhones: getPhones,
			setPhones: setPhones,
			getPhone: getPhone,
			setPhone: setPhone,
			addPhone: addPhone,
			deletePhone: deletePhone
		}									

	}
})(window.angular);