angular.module('myApp.userInfo', [])
  .component('userInfo',{
    templateUrl:'view1/userInfo/userInfo.html',
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
    controller: 'UserInfoCtrl',
    controllerAs: 'uc'
  })