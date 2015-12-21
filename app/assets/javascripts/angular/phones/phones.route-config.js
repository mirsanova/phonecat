'use strict';

angular
  .module('phonecatApp')
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvide, $locationProvider){
  $routeProvide
    .when('/',{
      templateUrl:'/templates/home.html',
      controller:'PhoneListCtrl'
    })
    .when('/about',{
      templateUrl:'/templates/about.html',
      controller:'AboutCtrl'
    })
    .when('/contact',{
      templateUrl:'/templates/contact.html',
      controller:'ContactCtrl'
    })
    .when('/phones/new', {
      templateUrl: '/templates/new.html',
      controller: 'PhoneAddCtrl'
    })
    .when('/phones/:phoneId', {
      templateUrl:'/templates/phone-detail.html',
      controller:'PhoneDetailCtrl'
    })
    .when('/phones/edit/:phoneId', {
      templateUrl:'/templates/edit.html',
      controller:'PhoneEditCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}