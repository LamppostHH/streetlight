angular.module('myApp.view1')
  .controller('View1Ctrl', [function($uibModal) {
  var vc = this;
  vc.yolo = 'hey there';

  vc.setSelectedOrg = function(orgName) {
    vc.selectedOrgName = orgName;
    console.log("Selected Org Name called ", vc.selectedOrgName)
  }

  vc.animationsEnabled = true;

   vc.open = function (size) {
    console.log('fucking first one');
     var modalInstance = $uibModal.open({
       animation: vc.animationsEnabled,
       ariaLabelledBy: 'modal-title',
       ariaDescribedBy: 'modal-body',
       templateUrl: 'userInfo.html',
       controller: 'UserInfoCtrl',
       controllerAs: 'uc',
       size: size
     });
   }

}]);