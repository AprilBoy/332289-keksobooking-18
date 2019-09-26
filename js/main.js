'use strict';

var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var TIME = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var OBJ_NUMBER = 8;
var LOCATION_Y_MAX = 630;
var LOCATION_Y_MIN = 130;
var MAP = document.querySelector('.map__pins');
var PIN = document.querySelector('#pin').content.querySelector('.map__pin');
var PIN_WIDTH = document.querySelector('.map__pin').offsetWidth;
var CONTAINER_WIDTH = MAP.offsetWidth - PIN_WIDTH;


var getRandomElem = function (arr) {
  var min = 0;
  var max = arr.length - 1;
  var index = Math.floor(Math.random() * (max - min + 1)) + min;
  return arr[index];
};

var getRandomNumber = function () {
  // eslint-disable-next-line no-undef
  var res = new Set();
  var numbers = [];
  while (res.size < OBJ_NUMBER) {
    res.add(Math.floor(Math.random() * OBJ_NUMBER) + 1);
  }
  res.forEach(function (value) {
    numbers.push('img/avatars/user0' + value + '.png');
  });
  return numbers;
};


var getRandomValue = function (max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getLocation = function (pinPosition) {
  var location = [];
  var randomPosition = 
  for (var i = 0; i < OBJ_NUMBER; i++) {
    location.push(pinPosition);
  }
  console.log(location);
  return location;
};


var getmockPinsData = function () {
  var mockArray = [];
  var imgNumber = getRandomNumber();
  var locationX = getLocation(getRandomValue(CONTAINER_WIDTH, 0));
  var locationY = getLocation(getRandomValue(LOCATION_Y_MAX, LOCATION_Y_MIN));

  for (var i = 0; i < OBJ_NUMBER; i++) {
    mockArray.push({
      'author': {
        'avatar': imgNumber[i]
      },
      'location': {
        'x': locationX[i],
        'y': locationY[i]
      },
      'offer': {
        'title': 'offerTitle',
        'address': '' + locationX[i] + ',' + locationY[i] + '',
        'price': getRandomValue(4000, 300),
        'type': getRandomElem(TYPE),
        'rooms': getRandomValue(1, 100),
        'guests': getRandomValue(3, 0),
        'checkin': getRandomElem(TIME),
        'checkout': getRandomElem(TIME),
        'features': getRandomElem(FEATURES),
        'description': 'descText',
        'photos': getRandomElem(PHOTOS)
      }
    });
  }
  console.dir(mockArray);
  return mockArray;
};


var preparePinNode = function (currentPin) {

  var pin = PIN.cloneNode(true);
  pin.style = 'left:' + currentPin.location.x + 'px; top:' + currentPin.location.y + 'px';
  pin.querySelector('img').src = currentPin.author.avatar;
  pin.querySelector('img').alt = currentPin.offer.description;
  return pin;

};


var renderPins = function () {
  var pins = getmockPinsData();
  var fragment = document.createDocumentFragment();
  document.querySelector('.map').classList.remove('map--faded');

  pins.forEach(function (pin) {
    fragment.appendChild(preparePinNode(pin));
  });

  MAP.appendChild(fragment);
};
renderPins();
