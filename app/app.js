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
  'myApp.userInfo',
  'myApp.addEvent',
  'ui.bootstrap',
  'firebase',
  'myApp.helper'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('AppCtrl', ['$uibModal', 'DataFactory', '$scope', function($uibModal, DataFactory, $scope) {
  $scope.animationsEnabled = true;
  $scope.open = function (size) {
    console.log('fucking first one');
     var modalInstance = $uibModal.open({
       animation: $scope.animationsEnabled,
       ariaLabelledBy: 'modal-title',
       ariaDescribedBy: 'modal-body',
       templateUrl: 'view1/userInfo/userInfo.html',
       controller: 'UserInfoCtrl',
       controllerAs: 'uc',
       size: size
     });
    modalInstance.result.then(function(result){
      console.log('result happened!', result);
      $scope.$broadcast('created', result);
    })
   };
  }]);
