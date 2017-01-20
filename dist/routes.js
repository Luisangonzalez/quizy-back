'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _test = require('./controller/test');

var routes = exports.routes = function routes(app) {

  app.get('/', function (req, res) {
    res.send('Hello :)');
  });

  app.get('/alltest/:manolo', function (req, res) {
    console.log('req :', req.params);
    (0, _test.getOneTest)().then(function (v) {
      res.send(v);
    });
  });
};

// ES5
// module.exports = function(app) {
//   app.get('/', (req, res) => {
//     res.send('Hello !!');
//   });
// };