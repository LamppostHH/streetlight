angular.module('myApp.data', [])
  .factory('DataFactory', [function(){
    // Used to inject dummy data into various services:
    // 1) inject DataFactory, then
    // 2) set local var to orgs, ie: vm.orgs = data.orgs
    // 3) add other non-org data as needed to this file
    var data = {};
    data.orgs = _orgs;
    return data;
  }
  ]);

// modify dummy orgs here for development
var _orgs = {
    'Helping Hand':{
      name: 'Helping Hand',
      location: [37.784784, -122.410136],
      description: 'description',
      category: ['stringz'],
      serviceArea: [[1,1],[1,1]],
      events:[{
        name:'First Event',
        location: [37.784784, -122.410136],
        description: 'description',
        date: '09/25/16',
        time: ['16:30','22:00']
    }]
    },
    'Urban Helpers':{
      name: 'Urban Helpers',
      location: [37.753726, -122.387846],
      description: 'description',
      category: ['stringz'],
      serviceArea: [[1,1],[1,1]],
      events:[{
        name:'First Event',
        location: [37.753726, -122.387846],
        description: 'description',
        date: '09/25/16',
        time: ['17:45','20:00']
      }]
    },
    'Mountain Helpers':{
      name: 'Mountain Helpers',
      location: [37.786962, -122.458764],
      description: 'description',
      category: ['stringz'],
      serviceArea: [[1,1],[1,1]],
      events:[{
        name:'First Event',
        location: [37.786962, -122.458764],
        description: 'description',
        date: '09/25/16',
        time: ['12:00','17:30']
      }]
    }
};
