'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = exports.app = undefined;

require('newrelic');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('babel-polyfill');

var _routes = require('./routes');

var _dotenv = require('dotenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import co from 'co';

(0, _dotenv.config)();

process.env.DOCKER_DB ? process.env.MONGODB_DEV : process.env.DOCKE_DB;
process.env.DOCKER_WEB_PORT ? process.env.WEB_PORT : process.env.DOCKER_WEB_PORT;

var app = exports.app = (0, _express2.default)();

var connect = exports.connect = function connect() {
    _mongoose2.default.connect(process.env.MONGODB_URI || process.env.MONGODB_DEV);
    _mongoose2.default.connection.on('error', console.error.bind(console, 'connection error:'));
    _mongoose2.default.connection.once('open', function () {
        console.log('Connecto with mongoose');
        app.listen(process.env.PORT || process.env.WEB_PORT, function () {
            console.log('Listening app');
        });
    });
};

connect();
(0, _routes.routes)(app);

// ES5 require('./routes.js')(app);