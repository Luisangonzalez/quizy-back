'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chooseCuestionSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This schema is valid for CHOOSE & TRUEFALSE & check  */
var Schema = _mongoose2.default.Schema;

var chooseCuestionSchema = exports.chooseCuestionSchema = new Schema({
    cuestion: String,
    answers: [{
        answer: String,
        isCorrect: Boolean
    }]

});