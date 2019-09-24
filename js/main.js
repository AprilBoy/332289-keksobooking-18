'use strict';

var AVATAR_IMG = ['01', '02', '03', '04', '05', '06', '07', '08'];
var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS = [1, 2, 3, 100];
var TIME = ['12:00', '13:00', '14:00'];
var GUESTS = [0, 1, 2, 3];
var PIN_LOCATION = [130, 630];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var OBJ_NUMBER = 8;

var MAP = document.querySelector('.map__pins');
var PIN = document.querySelector('#pin').content.querySelector('.map__pin');


var getRandomArrayElem = function (arr) {
  var startIndex = Math.floor(Math.random() * (arr.length - 1));
  var randomArrayElem = arr.splice(startIndex, 1);
  return randomArrayElem;
};

var getRandomNumber = function (arr) {
  return ((Math.floor(Math.random() * (arr[1] - arr[0]) + arr[0])) + 'px');
};


var getMockArray = function () {
  var mockArray = [];
  for (var i = 0; i < OBJ_NUMBER; i++) {
    mockArray.push({
      'author': {
        'avatar': 'img/avatars/user' + getRandomArrayElem(AVATAR_IMG) + '.png'
      },
      'offer': {
        'title': 'offerTitle',
        'address': '{{location.x}}, {{location.y}}',
        'price': 123,
        'type': getRandomArrayElem(TYPE),
        'rooms': getRandomArrayElem(ROOMS),
        'guests': getRandomArrayElem(GUESTS),
        'checkin': getRandomArrayElem(TIME),
        'checkout': getRandomArrayElem(TIME),
        'features': getRandomArrayElem(FEATURES),
        'description': 'descText',
        'photos': getRandomArrayElem(PHOTOS)
      },
      'location': {
        'x': 100,
        'y': 60
      }
    });
  }
console.log(location.y);
  return mockArray;
};


var preparePinNode = function (currentPin) {
  var pin = PIN.cloneNode(true);
  pin.style = 'left:' + location.x + 'px; top:' + location.y + 'px';
  pin.querySelector('img').src = currentPin.author.avatar;
  pin.querySelector('img').alt = currentPin.offer.description;
  return pin;
};


var renderPins = function () {
  var pins = getMockArray();
  var fragment = document.createDocumentFragment();
  document.querySelector('.map').classList.remove('map--faded');

  for (var i = 0; i < pins.length; i++) {
    var pin = preparePinNode(pins[i]);
    fragment.appendChild(pin);
  }

  MAP.appendChild(fragment);
};
renderPins();
