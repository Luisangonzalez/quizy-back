'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = exports.OneCuestion = exports.ArrowCuestion = exports.ChooseCuestion = exports.CuestionBase = exports.User = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schemas = require('./schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = exports.User = _mongoose2.default.model('User', _schemas.userSchema);
var CuestionBase = exports.CuestionBase = _mongoose2.default.model('CuestionBase', _schemas.cuestionBaseSchema);
var ChooseCuestion = exports.ChooseCuestion = _mongoose2.default.model('CuestionChoose', _schemas.chooseCuestionSchema);
var ArrowCuestion = exports.ArrowCuestion = _mongoose2.default.model('ArrowCuestion', _schemas.arrowCuestionSchema);
var OneCuestion = exports.OneCuestion = _mongoose2.default.model('OneCuestion', _schemas.oneCuestionSchema);
var Test = exports.Test = _mongoose2.default.model('Test', _schemas.testSchema);