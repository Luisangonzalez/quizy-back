'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oneCuestionSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* TYPE ONE */
var Schema = _mongoose2.default.Schema;

var oneCuestionSchema = exports.oneCuestionSchema = new Schema({ cuestion: String, answer: String });