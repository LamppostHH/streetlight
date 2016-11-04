angular.module('myApp.mapWrapper')
  .controller('MapCtrl', ['NgMap', '$scope', function(NgMap, $scope){
    var mc = this;

    var _getMap = function(){
        NgMap.getMap('ng-map').then(function(map) {
          mc.map = map;
          mc.loaded = true;
        });
    };

    var _listOrgs = function(){
      mc.orgs = Object.keys(mc.orgMap).filter(function(key){return key[0]!=='$'}).map(function(name){
        return mc.orgMap[name];
      });
    };

    mc.showInfoWindow = function(event, o) {
      var infowindow = new google.maps.InfoWindow();
      console.log('o: ', o);
      var center = new google.maps.LatLng(o.location[0]+0.006, o.location[1]);

      infowindow.setPosition(center);

      infowindow.setContent(
          '<h5>' + o.name + '</h5>' +
          '<p>' + o.description + '</p>'
          );

      infowindow.open(mc.map);
      mc.setOrg({'orgName': o.name});
    };

    mc.mapClickHandler = function(event) {
      if (mc.adding) {
        console.log('pusing coord, ', mc.path);
        mc.path.push([event.latLng.lat(), event.latLng.lng()]);
      }
    };

    mc.getColor = function(category) {
      if (!category) { return null }
      category = category.toLowerCase();
      var _colorMap = {
        'healthcare': '#FF0000',
        'food': '#00FF00',
        'exercise': '#0000FF'
      };
      return _colorMap[category];
    };

    mc.getIcon = function(category) {
      if (!category) { return null }
      category = category.toLowerCase();
      var _icon = {
        'healthcare': 'map-icon-doctor',
        'food': 'map-icon-food',
        'exercise': 'map-icon-gym'
      };
      return _icon[category];
    };

    $scope.$on('created', function(evt, createdObj){
      mc.adding = true;
      mc.editObj = createdObj;
      _listOrgs();
      console.log('editObj: ', mc.editObj);
    });
    // this is hideous pls don't do this
    mc.saveServiceArea = function(){
      mc.adding = false;
      mc.orgMap[mc.editObj.name].serviceArea = mc.path;
      mc.orgMap.$save()
    };

    mc.$onInit = function() {
      mc.path = [];
      _getMap();
    };

    mc.$onChanges = function() {
      console.log('listing orgs');
      _listOrgs();
    }

  }]);