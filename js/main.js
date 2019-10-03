'use strict';

var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var TIME = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var OBJ_NUMBER = 8;
var LOCATION_Y_MAX = 630;
var LOCATION_Y_MIN = 130;
var MAP = document.querySelector('.map');
var PINS_BLOCK = MAP.querySelector('.map__pins');
var PIN = PINS_BLOCK.querySelector('.map__pin');
var PIN_IMG = PIN.querySelector('img');
var FORM_BLOCK = document.forms.adForm;
var INPUT_BLOCK = FORM_BLOCK.querySelectorAll('fieldset');
var PIN_WIDTH = MAP.querySelector('.map__pin').offsetWidth;
var CONTAINER_WIDTH = PINS_BLOCK.offsetWidth - PIN_WIDTH;

var getRandomValue = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomElem = function (arr) {
  var index = getRandomValue(0, arr.length);
  return arr[index];
};

var getAvatarImg = function () {
  // eslint-disable-next-line no-undef
  var res = new Set();
  var numbers = [];

  while (res.size < OBJ_NUMBER) {
    res.add(getRandomValue(1, OBJ_NUMBER));
  }
  res.forEach(function (value) {
    numbers.push('img/avatars/user0' + value + '.png');
  });
  return numbers;
};


var getmockPinsData = function () {
  var mockArray = [];
  var imgNumber = getAvatarImg();


  for (var i = 0; i < OBJ_NUMBER; i++) {
    var locationX = getRandomValue(CONTAINER_WIDTH, 0);
    var locationY = getRandomValue(LOCATION_Y_MAX, LOCATION_Y_MIN);
    mockArray.push({
      'author': {
        'avatar': imgNumber[i]
      },
      'location': {
        'x': locationX,
        'y': locationY
      },
      'offer': {
        'title': 'offerTitle',
        'address': '' + locationX + ',' + locationY + '',
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
  return mockArray;
};


var preparePinNode = function (currentPin) {
  var pin = PIN.cloneNode(true);

  pin.style = 'left:' + currentPin.location.x + 'px; top:' + currentPin.location.y + 'px';
  PIN_IMG.src = currentPin.author.avatar;
  PIN_IMG.alt = currentPin.offer.description;
  return pin;

};


var renderPins = function () {
  var pins = getmockPinsData();
  var fragment = document.createDocumentFragment();

  pins.forEach(function (pin) {
    fragment.appendChild(preparePinNode(pin));
  });

  PINS_BLOCK.appendChild(fragment);
};
renderPins();


INPUT_BLOCK.forEach(function (item) {
  item.setAttribute('disabled', 'disabled');
});


var pinClickHandler = function () {
  MAP.classList.remove('map--faded');
  FORM_BLOCK.classList.remove('ad-form--disabled');
  INPUT_BLOCK.forEach(function (item) {
    item.removeAttribute('disabled');
  });
};


var PINS = PINS_BLOCK.querySelectorAll('.map__pin--main');
PINS.forEach(function (item) {
  item.addEventListener('mousedown', pinClickHandler);
  item.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      pinClickHandler();
    }
  });
});
