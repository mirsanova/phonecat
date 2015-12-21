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
				data.phone = response.data;
			});			
		}

		function getPhone(){
			return data;
		}
   	
   	function addPhone(phone) {
		 	$http.post('/phones.json', phone).then(function (data) {
		 		data.phones = data.data;
		 	});
		};

		 function updatePhone(phone) {
		 	$http.put('/phones/edit/'+ $routeParams.phoneId + '.json', phone).then(function (status) {
		 		data.phones = data.data;
		 		console.log(data.phones);
		 	});
		};

		function deletePhone(phone) {
		 	return $http.delete('/phones/' + phone.id + '.json').then(function (status) {	
		 		
		 		var box = data.phones;
		 		var index = box.indexOf(phone);
		 	  box.splice(index, 1);

		 	  return data;

		 	});
		};
		
		return {
			getPhones: getPhones,
			setPhones: setPhones,
			getPhone: getPhone,
			setPhone: setPhone,
			addPhone: addPhone,
			updatePhone: updatePhone,
			deletePhone: deletePhone
		}									
	}
})(window.angular);