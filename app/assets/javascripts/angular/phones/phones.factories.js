(function(angular) {
	'use strict';

	angular
	  .module('phonecatApp')
	  .factory('Phones', Phones);

	Phones.$inject = ['$q', '$http', '$routeParams'];

	function Phones($q, $http, $routeParams) {
	var self = this;	
		self.data = {
			phones: []
		};
		// self.current = null;

		function setPhones(){

			$http.get('/phones.json').then(function(response){
				self.data.phones = response.data;
			});
		}

		function getPhones(){
			return self.data;
		}

		function setPhone(){
			var deferred = $q.defer();

			$http.get('/phones/' + $routeParams.phoneId + '.json').then(function(response){
				self.data.phone = response.data;
				deferred.resolve(response);
			});			

			return deferred.promise;
		}

		function getPhone(){
			return self.data.phone;
		}
   	
   	function addPhone(phone) {
		 	$http.post('/phones.json', phone).then(function (data) {
		 		self.data.phone = data.data;
		 	});
		};

		 function updatePhone(phone) {
		 	$http.put('/phones/'+ $routeParams.phoneId + '.json', phone).then(function (data) {
		 		self.data.phone = data.data;
		 	});
		};

		function deletePhone(phone) {
		 	return $http.delete('/phones/' + phone.id + '.json').then(function (status) {	
		 		
		 		var box = self.data.phones;
		 		var index = box.indexOf(phone);
		 	  box.splice(index, 1);

		 	  return self.data;

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