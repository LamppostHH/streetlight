'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as vt'
  });
}])

.controller('View2Ctrl', ['DataFactory','$scope', function(DataFactory, $scope) {
  var vt = this;
  vt.orgEvents = [];
  var _init = function(){
    Object.keys(DataFactory.orgs).filter(function(key){return key[0]!=='$'}).forEach(function(key){
      vt.orgEvents = vt.orgEvents.concat(DataFactory.orgs[key].events || []);
    });
  };

  _init()

}]);

