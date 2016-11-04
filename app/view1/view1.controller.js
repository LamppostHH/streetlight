angular.module('myApp.view1')
  .controller('View1Ctrl', ['$uibModal', 'DataFactory', '$scope', '$timeout', function($uibModal, DataFactory, $scope, $timeout) {
  var vc = this;
  vc.yolo = 'hey there';

  vc.setSelectedOrg = function(orgName) {
    vc.selectedOrgName = orgName;
    vc.events = DataFactory.orgs[orgName].events;
    console.log("Selected Org Name called ", vc.selectedOrgName)
  };

  var _checkOrgMap = function(){
    return Object.keys(DataFactory.orgs).length;
  };
  var _init = function(){
    DataFactory.orgs.$loaded().then(function(){
      vc.orgMap = DataFactory.orgs;
      vc.loaded = true;
      vc.changeCounter = 0;
      // $scope.$watch(_checkOrgMap, function(newVal, oldVal){
      //   if(!newVal || !oldVal){
      //     return false;
      //   }
      //   console.log('changes');
      //   debugger;
      //   vc.changeCounter++;
      // })
    });
  };
  $scope.$on('created', function(){
    vc.showPopover = true;
    $timeout(function(){
      vc.showPopover = false;
    }, 5000)
  });
  _init();


  vc.addEvent = function (size) {
    console.log('add event modal');
    var modalInstance = $uibModal.open({
      animation: vc.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'view1/addevent/addEvent.html',
      controller: 'AddEventCtrl',
      controllerAs: 'ec',
      resolve: {
        Selected: function(){
          return DataFactory.orgs[vc.selectedOrgName];
        }
      },
      size: size
    });
  }

}]);
