'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arrowCuestionSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  Type ARROW */
var Schema = _mongoose2.default.Schema;

var arrowCuestionSchema = exports.arrowCuestionSchema = new Schema({
    cuestion: String,
    columnA: [{
        phrase: String,
        indexColumnB: [Number]
    }],
    columnB: [String]
});