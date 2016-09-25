angular.module('myApp.infoWindow', ['ngMap'])
  .component('infoWindow',{
    templateUrl:'view1/map/infowindow/infowindow.html',
    bindings: {
      getOrg: '&',
      description: '@'
    },
    controller: 'infoWindowCtrl',
    controllerAs: 'iw'
  })
