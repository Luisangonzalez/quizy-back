'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cuestionBase = require('./cuestions/cuestionBase');

Object.defineProperty(exports, 'cuestionBaseSchema', {
  enumerable: true,
  get: function get() {
    return _cuestionBase.cuestionBaseSchema;
  }
});

var _cuestionChoose = require('./cuestions/cuestionChoose');

Object.defineProperty(exports, 'chooseCuestionSchema', {
  enumerable: true,
  get: function get() {
    return _cuestionChoose.chooseCuestionSchema;
  }
});

var _oneCuestion = require('./cuestions/oneCuestion');

Object.defineProperty(exports, 'oneCuestionSchema', {
  enumerable: true,
  get: function get() {
    return _oneCuestion.oneCuestionSchema;
  }
});

var _arrow = require('./cuestions/arrow');

Object.defineProperty(exports, 'arrowCuestionSchema', {
  enumerable: true,
  get: function get() {
    return _arrow.arrowCuestionSchema;
  }
});

var _user = require('./user');

Object.defineProperty(exports, 'userSchema', {
  enumerable: true,
  get: function get() {
    return _user.userSchema;
  }
});

var _test = require('./test');

Object.defineProperty(exports, 'testSchema', {
  enumerable: true,
  get: function get() {
    return _test.testSchema;
  }
});