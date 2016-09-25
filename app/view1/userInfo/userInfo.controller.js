angular.module('myApp.userInfo', ['DataFactory'])
  .controller('UserInfoCtrl', [function(DataFactory) {
    console.log(DataFactory);
  }]);