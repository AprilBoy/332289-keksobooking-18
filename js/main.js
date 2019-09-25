'use strict';

var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS = [1, 2, 3, 100];
var TIME = ['12:00', '13:00', '14:00'];
var GUESTS = [0, 1, 2, 3];
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
  var startIndex = Math.floor(Math.random() * (arr.length - 1));
  return arr.splice(startIndex, 1);
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
  return Math.floor(Math.random() * (max - min) + min);
};
var getLocationX = function () {
  return Math.floor(Math.random() * (CONTAINER_WIDTH));
};
var getLocationY = function () {
  return Math.floor(Math.random() * (LOCATION_Y_MAX - LOCATION_Y_MIN) + LOCATION_Y_MIN);
};


var mockPinsData = function () {
  var mockArray = [];
  var imgNumber = getRandomNumber();
  for (var i = 0; i < OBJ_NUMBER; i++) {
    mockArray.push({
      'author': {
        'avatar': imgNumber[i]
      },
      'location': {
        'x': getLocationX(),
        'y': getLocationY()
      },
      'offer': {
        'title': 'offerTitle',
        'address': '' + location.x + ',' + location.y + '',
        'price': getRandomValue(4000, 300),
        'type': getRandomElem(TYPE),
        'rooms': getRandomElem(ROOMS),
        'guests': getRandomElem(GUESTS),
        'checkin': getRandomElem(TIME),
        'checkout': getRandomElem(TIME),
        'features': getRandomElem(FEATURES),
        'description': 'descText',
        'photos': getRandomElem(PHOTOS)
      }
    });
  }
  console.dir(mockPinsData);
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
  var pins = mockPinsData();
  var fragment = document.createDocumentFragment();
  document.querySelector('.map').classList.remove('map--faded');

  pins.forEach(function (pin) {
    fragment.appendChild(preparePinNode(pin));
  });
  
  MAP.appendChild(fragment);
};
renderPins();
