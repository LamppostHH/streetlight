'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMap',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.mapWrapper',
  'myApp.demo',
  'myApp.data',
  'myApp.infoWindow',
  'myApp.eventList',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
