'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schemas = require('./schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var testSchema = exports.testSchema = new Schema({
    title: String,
    author: _schemas.userSchema,
    category: String,
    isOrder: Boolean,
    askLater: Boolean,
    allowNotAsk: Boolean,
    statistics: [{
        passed: Number,
        nTimes: Number,
        volarations: Number,
        nShared: [{
            google: Number,
            facebook: Number,
            twitter: Number,
            email: Number
        }]
    }],
    dateCreation: Date,
    dataPublished: Date,
    timeToFinish: Date,
    private: [{
        users: [{
            userId: String,
            write: Boolean
        }]
    }],
    cuestions: [_schemas.cuestionBaseSchema]
});