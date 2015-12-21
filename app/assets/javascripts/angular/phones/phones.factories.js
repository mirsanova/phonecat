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

		function deletePhone(phone) {
		 	//return $http.delete('/phones/' + phone.id + '.json').then(function (status) {	
		 		//console.log(status.data);
		 		
		 		var box = data.phones;
		 		var id = phone.id;


		 		console.log(box);
		 		console.log(box.indexOf(box));


		 		// data.phones = box.splice(box[0], 1);
		 		// console.log(data.phones);		 	
		 		// return data;
		 		// delete box[phone.id];

		 		


		 	//});
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