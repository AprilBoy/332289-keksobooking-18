'use strict';

var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS = [1, 2, 3, 100];
var TIME = ['12:00', '13:00', '14:00'];
var GUESTS = [0, 1, 2, 3];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var OBJ_NUMBER = 8;


var MAP = document.querySelector('.map__pins');
var PIN = document.querySelector('#pin').content.querySelector('.map__pin');
var PIN_WIDTH = document.querySelector('.map__pin').offsetWidth;
var CONTAINER_WIDTH = MAP.offsetWidth - PIN_WIDTH;


var getRandomElem = function (arr) {
  var startIndex = Math.floor(Math.random() * (arr.length - 1));
  var randomArrayElem = arr.splice(startIndex, 1);
  return randomArrayElem;
};

var getRandomNumber = function () {
  // eslint-disable-next-line no-undef
  var res = new Set();
  while (res.size < 8) {
    res.add(Math.floor(Math.random() * (8 - 1 + 1)) + 1);
  }
  for (var num of Object.entries(res)) {
    
  }
};

var getLocationX = function () {
  return Math.floor(Math.random() * (CONTAINER_WIDTH - PIN_WIDTH));
};
var getLocationY = function () {
  return Math.floor(Math.random() * (630 - 130) + 130);
};

var getMockArray = function () {
  var mockArray = [];
  for (var i = 0; i < OBJ_NUMBER; i++) {
    mockArray.push({
      'author': {
        'avatar': 'img/avatars/user' + getRandomNumber() + '.png'
      },
      'offer': {
        'title': 'offerTitle',
        'address': location.x + location.y,
        'price': 123,
        'type': getRandomElem(TYPE),
        'rooms': getRandomElem(ROOMS),
        'guests': getRandomElem(GUESTS),
        'checkin': getRandomElem(TIME),
        'checkout': getRandomElem(TIME),
        'features': getRandomElem(FEATURES),
        'description': 'descText',
        'photos': getRandomElem(PHOTOS)
      },
      'location': {
        'x': getLocationX(),
        'y': getLocationY()
      }
    });
  }
  console.dir(mockArray);
  return mockArray;
};


var preparePinNode = function (currentPin) {

  var pin = PIN.cloneNode(true);
  pin.style = 'left:' + getLocationX() + 'px; top:' + getLocationY() + 'px';
  pin.querySelector('img').src = currentPin.author.avatar;
  pin.querySelector('img').alt = currentPin.offer.description;
  return pin;

};


var renderPins = function () {
  var pins = getMockArray();
  var fragment = document.createDocumentFragment();
  document.querySelector('.map').classList.remove('map--faded');

  pins.forEach(function (pin) {
    fragment.appendChild(preparePinNode(pin));
  });


  MAP.appendChild(fragment);
};
renderPins();
