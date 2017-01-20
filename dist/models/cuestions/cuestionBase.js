'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cuestionBaseSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cuestionChoose = require('./cuestionChoose');

var _oneCuestion = require('./oneCuestion');

var _arrow = require('./arrow.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var cuestionBaseSchema = exports.cuestionBaseSchema = new Schema({
    image: String,
    youtube: String,
    link: String,
    description: String,
    comment: [{
        ok: String,
        fail: String,
        Join: String
    }],
    // Type of schemas:
    //  -> SECTION
    //  -> CHOOSE
    //  -> TRUEFALSE
    //  -> CHECK
    //  -> ONE
    //  -> ARROW
    type: String,
    choose: _cuestionChoose.chooseCuestionSchema,
    truefalse: _cuestionChoose.chooseCuestionSchema,
    check: _cuestionChoose.chooseCuestionSchema,
    one: _oneCuestion.oneCuestionSchema,
    arrow: _arrow.arrowCuestionSchema

});