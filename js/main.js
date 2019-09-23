'use strict';
var AVATAR_IMG = ['01', '02', '03', '04', '05', '06', '07', '08'];
var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var TIME = ['12:00', '12:00', '12:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var getRandomValue = function (arr) {
  return Math.floor(Math.random() * (arr.length - 1));
};


var getRandomObject = function () {
  var randomObject = {
    'author': {
      'avatar': ''
    },
    'offer': {
      'title': '600, 350',
      'price': 123,
      'type': '',
      'rooms': 123,
      'guests': 123,
      'checkin': '',
      'checkout': '',
      'features': [],
      'description': '',
      'photos': []
    },
    'location': {
      'x': 123,
      'y': 1243
    }
  };
  return randomObject;
};

getRandomObject();
