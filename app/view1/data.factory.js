angular.module('myApp.data', ['firebase'])
  .factory('DataFactory', ['$firebaseObject', function($firebaseObject){

    var fireRef = firebase.database().ref();
    // Used to inject dummy data into various services:
    // 1) inject DataFactory, then
    // 2) set local var to orgs, ie: vm.orgs = data.orgs
    // 3) add other non-org data as needed to this file
    var data = {};
    data.orgs = $firebaseObject(fireRef);
    data.addOrg = function(org){
      data.orgs[org.name] = org;
      console.log('orgData: ', data.orgs);
    };
    return data;
  }
  ]);

// modify dummy orgs here for development
var _orgs = {
  'Helping Hand':{
    name: 'Helping Hand',
    email: 'helpinghand@hotmail.com',
    location: [37.784784, -122.410136],
    address: '261 Ellis Street, San Francisco, CA 94102',
    description: 'its hands that help',
    category: 'exercise',
    serviceArea: [[37.80218877920469,-122.43267059326172],[37.779398571318765,-122.43301391601562],[37.773157169570695,-122.40245819091797],[37.785096782276035,-122.3880386352539],[37.798662182986945,-122.39662170410156],[37.80544394934271,-122.40348815917969],[37.80815648152641,-122.41344451904297],[37.80463017025873,-122.43026733398438],[37.802460048862656,-122.43404388427734]],
    events:[
    {
      name:'Give a Hand',
      location: [37.784784, -122.410136],
      address: '261 Ellis Street, San Francisco, CA 94102',
      description: 'Volunteer to help those who need it',
      date: '09/25/16',
      time: ['16:30','22:00']
    },
    {
      name:'Lift a hand',
      location: [37.784784, -122.410136],
      address: '261 Ellis Street, San Francisco, CA 94102',
      description: 'Volunteer to help those who need it',
      date: '09/27/16',
      time: ['16:30','22:00']
    }]
  },
  'The Sanctuary':{
    name: 'The Sanctuary',
    email: 'urbanhelpers@yahoo.com',
    location: [37.753726, -122.387846],
    address: '2833 3rd Street, San Francisco, CA 94107',
    description: 'urban areas need help',
    category: 'food',
    serviceArea: [[37.78238340327456,-122.38838195800781],[37.773699921075135,-122.40623474121094],[37.75334401310656,-122.40348815917969],[37.73786977649298,-122.40657806396484],[37.735154664553534,-122.37602233886719],[37.78238340327456,-122.3876953125]],
    events:[
    {
      name:'The Sanctuary Helpers Meeting',
      location: [37.753726, -122.387846],
      address: '2833 3rd Street, San Francisco, CA 94107',
      description: 'Meet with the The Sanctuary Helpers and learn more',
      date: '09/25/16',
      time: ['17:45','20:00']
    },
    {
      name:'The Sanctuary Helpers Meeting',
      location: [37.753726, -122.387846],
      address: '2833 3rd Street, San Francisco, CA 94107',
      description: 'Meet with the Urban Helpers and learn more',
      date: '09/28/16',
      time: ['17:45','20:00']
    }]
  },
  'Coalition On homelessness San Francisco':{
    name: 'Coalition On homelessness San Francisco',
    email: 'mountainhelpers@sbcglobal.net',
    location: [37.786962, -122.458764],
    description: 'i guess some mountains need help too',
    address: '3984 Sacramento Street, San Francisco, CA 94118',
    category: 'healthcare',
    serviceArea: [[37.77641361883315,-122.45635986328125],[37.788624026050876,-122.43404388427734],[37.80028986370208,-122.44949340820312],[37.79974730744888,-122.4700927734375],[37.78699608830537,-122.4752426147461],[37.7761422535397,-122.45773315429688]],
    events:[{
      name:'Volunteering',
      location: [37.786962, -122.458764],
      address: '3984 Sacramento Street, San Francisco, CA 94118',
      description: 'Help others climb the mountain of success',
      date: '09/25/16',
      time: ['12:00','17:30']
    }]
  },
    'Sunset Homeless Collective': {
    name: 'Sunset Helpers',
    emial: 'sunsethelpers@hotmail.com',
    location: [37.750573, -122.498686],
    description: 'Tackling the homelessness in the Sunset district',
    address: '',
    category: 'Healthcare',
    serviceArea: [[37.769629187677005,-122.4862289428711],[37.76365837331252,-122.5088882446289],[37.7318963987918,-122.50202178955078],[37.735426180228245,-122.46837615966797],[37.76474401178004,-122.44468688964844],[37.769629187677005,-122.4862289428711]],
    events: [{
      name: 'Soup Kitchen',
      location: [37.750573, -122.498686],
      address: '',
      description: 'Come eat our soup',
      date: '10/11/16',
      time: ['08:00', '20:00']
    }]
  },
  'A Home Away From Homelessness': {
    name: 'A Home Away From Homelessness',
    emial: 'mercedhelpers@hotmail.com',
    location: [37.708329, -122.447038],
    description: 'Helping homelss around the lake',
    address: '',
    category: 'food',
    serviceArea: [[37.740584788858285,-122.45773315429688],[37.73216792641496,-122.50614166259766],[37.70310882467999,-122.4917221069336],[37.69821925772116,-122.45601654052734],[37.709899354855125,-122.4312973022461],[37.72103447742806,-122.4312973022461],[37.7318963987918,-122.43816375732422],[37.741127779382225,-122.45670318603516]],
    events: [{
      name: 'Merced Food Drive',
      location: [37.708329, -122.447038],
      address: '',
      description: 'Food drive for the homeless',
      date: '12/24/16',
      time: ['13:00', '18:45']
    }]
  },
  'Visitacion Valley Homeless Project': {
    name: 'Visitacion Valley Homeless Project',
    email: 'visitationhelpers.gmail.com',
    location: [37.713948, -122.407953],
    description: 'helping the homeless in the valley',
    address: '',
    category: 'food',
    serviceArea: [[37.73895579338813,-122.43541717529297],[37.72945260537779,-122.35954284667969],[37.71614609310727,-122.36331939697266],[37.72184917678752,-122.37842559814453],[37.72402166460628,-122.38494873046875],[37.71044257039145,-122.37739562988281],[37.709356135336876,-122.38151550292969],[37.707998069120265,-122.39215850830078],[37.69577435330179,-122.39147186279297],[37.68708070686609,-122.39250183105469],[37.68708070686609,-122.40142822265625],[37.69142765748514,-122.40554809570312],[37.696860987441895,-122.40966796875],[37.69957750311584,-122.41859436035156],[37.70609673460725,-122.42477416992188],[37.7109857819458,-122.42683410644531],[37.738141282210385,-122.43644714355469]],
    events: [{
      name: 'valley food fair',
      location: [37.713948, -122.407953],
      address: '',
      description: 'Food in the valley',
      date: '1/1/17',
      time: ['08:00', '12:56']
    }]
  },
  'Project Homeless Connect': {
    name: 'Project Homeless Connect',
    email: 'projecthomelessconnect.gmail.com',
    location: [37.776472, -122.420194],
    description: 'The mission of Project Homeless Connect is to connect San Franciscans experiencing homelessness with the care they need to move forward',
    address: '25 Van Ness Ave #340, San Francisco, CA 94102',
    category: 'Healthcare',
    serviceArea: [[37.79323632157157,-122.39765167236328],[37.78753873820529,-122.442626953125],[37.75795850991872,-122.42717742919922],[37.75850137297436,-122.40486145019531],[37.77885586164994,-122.3876953125],[37.79296501804014,-122.39765167236328]],
    events: [{
      name: 'Project Homeless Connect',
      location: [37.776472, -122.420194],
      address: '25 Van Ness Ave #340, San Francisco, CA 94102',
      description: 'Food in the valley',
      date: '9/28/16',
      time: ['08:00', '12:56']
    }]
  }
};