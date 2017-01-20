'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = exports.userSchema = new Schema({
    username: String,
    name: String,
    LastName: String,
    email: String,
    url: String,
    image: String,
    socialNetwork: [{
        google: String,
        facebook: String,
        twitter: String,
        email: String
    }]
});