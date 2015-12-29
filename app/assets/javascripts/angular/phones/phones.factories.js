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

		function setPhones(){
			$http.get('/phones.json').then(function(response){
				self.data.phones = response.data;				
			});
		}

		function getPhones(){
			
			return self.data;
		}

		function setPhone(){
			//var deferred = $q.defer();

			var source = $http.get('/phones/' + $routeParams.phoneId + '.json').then(function(response){
				self.data.phone = response.data;
				// deferred.resolve(response);
			});			
			return source;
		}

		function getPhone(){

			return self.data.phone;
		}       
   	
   	function addPhone(phone) {
		 	$http.post('/phones.json', phone).then(function (data) {
		 		self.data.phone = data.data;
		 		
		 	});
		};

    function phoneUpdateStatus(phone) {
      return $http.put('/phones/'+ phone.id + '.json', phone).then(function (response) {

      	self.data.phone = response.data;

      });
    };

		function updatePhone(phone) {
		 	return $http.put('/phones/'+ $routeParams.phoneId + '.json', phone).then(function (data) {
		 		var box = self.data.phones;
		 		var thisPhone = self.data.phone;
		 		var index = box.map(function(x) {return x.id; }).indexOf(thisPhone.id);
				var objectFound = box[index];
		
		 		box[index] = self.data.phone;

		 		return box[index];
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
			deletePhone: deletePhone,
      phoneUpdateStatus: phoneUpdateStatus
		}									
	}
})(window.angular);