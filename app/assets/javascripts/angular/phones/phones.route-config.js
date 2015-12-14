'use strict';

angular
  .module('phonecatApp')
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvide, $locationProvider){
  $routeProvide
    .when('/',{
      templateUrl:'public/templates/home.html',
      controller:'PhoneListCtrl'
    })
    .when('/about',{
      templateUrl:'public/templates/about.html',
      controller:'AboutCtrl'
    })
    .when('/contact',{
      templateUrl:'public/templates/contact.html',
      controller:'ContactCtrl'
    })
    .when('/phones/:phoneId', {
      templateUrl:'public/templates/phone-detail.html',
      controller:'PhoneDetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}