angular.module('myApp.map', [])
  .component('map',{
    templateUrl:'view1/map/map.html',
    bindings: {
      // one way data binding
      points:'<',
      // passing a callback function
      callback: '&',
      // string
      mapname: '@',
      //two way data binding
      model:'='
    },
    controller: 'MapCtrl',
    controllerAs: 'mc'
  })




  //component takes obj