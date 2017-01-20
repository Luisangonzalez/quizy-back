'use strict';

var _bluebird = require('bluebird');

var _server = require('./server');

require('babel-polyfill');

var _models = require('./models/models');

var newUser = new _models.User({
    username: 'usernameString',
    name: 'nameString',
    LastName: 'lastNameString',
    email: 'emailString',
    url: 'urlString',
    image: 'imageString',
    socialNetwork: [{
        google: 'googleString',
        facebook: 'facebookString',
        twitter: 'twitterString',
        email: 'emailString'
    }]
});
// import co from 'co';

var newArrowCuestion = new _models.ArrowCuestion({
    cuestion: 'Selecciona con flechas',
    columnA: [{
        phrase: 'leche',
        indexColumnB: [0, 1]
    }, {
        phrase: 'huevo',
        indexColumnB: [2]
    }, {
        phrase: 'plumas',
        indexColumnB: [2]
    }],
    columnB: ['vaca', 'queso', 'gallina']
});

var newOneCuestion = new _models.OneCuestion({
    cuestion: '¿De que color era el caballo blanco de Santiago?',
    answer: 'BLANCO'
});

var newChooseCuestion = new _models.ChooseCuestion({
    cuestion: '¿Cual es mi pueblo?',
    answers: [{
        answer: 'Galvez',
        isCorrect: false
    }, {
        answer: 'Menasalbas',
        isCorrect: true
    }]
});

var newCuestionChoose = new _models.CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [{
        ok: 'mu bien',
        fail: 'mall',
        Join: 'ale'
    }],
    type: 'CHOOSE',
    choose: newChooseCuestion
});

var newCuestionTrueFalse = new _models.CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [{
        ok: 'mu bien',
        fail: 'mall',
        Join: 'ale'
    }],
    type: 'TRUEFALSE',
    truefalse: newChooseCuestion
});

var newCuestionCheck = new _models.CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [{
        ok: 'mu bien',
        fail: 'mall',
        Join: 'ale'
    }],
    type: 'CHECK',
    check: newChooseCuestion
});

var newCuestionOne = new _models.CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [{
        ok: 'mu bien',
        fail: 'mall',
        Join: 'ale'
    }],
    type: 'ONE',
    one: newOneCuestion
});

var newCuestionArrow = new _models.CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [{
        ok: 'mu bien',
        fail: 'mall',
        Join: 'ale'
    }],
    type: 'ARROW',
    arrow: newArrowCuestion
});

var newCuestionSection = new _models.CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    type: 'SECTION'
});

var newTest = new _models.Test({
    title: 'title_String',
    author: newUser,
    category: 'category_String',
    order: true,
    askLater: true,
    allowNotAsk: true,
    statistics: [{
        passed: 5,
        nTimes: 2,
        volarations: 3,
        nShared: [{
            google: 2,
            facebook: 1,
            twitter: 6,
            email: 0
        }]
    }],
    dateCreation: Date.now(),
    dataPublished: Date.now(),
    timeToFinish: Date.now(),
    private: [{
        users: [{
            userId: 'Manolo',
            write: true
        }]
    }],
    cuestions: [newCuestionChoose, newCuestionTrueFalse, newCuestionOne, newCuestionCheck, newCuestionArrow, newCuestionSection]
});

// const hostDB = () => {
//   let db_host;
//   if (process.env.DB_HOST) {
//     db_host = process.env.DB_HOST;
//   } else {
//     db_host = 'localhost';
//   }
// return db_host;
// };
//
// const connectDB = () => {
//   mongoose.connect('mongodb://' + hostDB() + ':27017/test');
//   mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
//   mongoose.connection.once('open', function () {
//     console.log('Connecto with mongoose');
//   });
// };
//
// connectDB();

(0, _server.connect)();

// With ES6 Promise

// let saveDb = function async (newTest){
//   new Promise(function () {
//     try {
//       newTest.save();
//     } catch (e) {
//        console.error(e);
//     } finally {
//       console.log('Test Save');
//     }
//   });
// };
//
// saveDb(newTest);

// or

// newTest.save(()=>{
//   console.log('Test save');
//   })
//   .catch((err) => {
//     console.error('Error:');
//  });

// With co package

// co(function * () {
//   try {
//     yield newTest.save();
//   } catch (e) {
//     console.error(e);
//   }
// });

// ES7 async

var saveTest = function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(newTest) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        try {
                            newTest.save();
                        } catch (e) {
                            console.error(e);
                        } finally {
                            console.log('Test Save async');
                        }

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function saveTest(_x) {
        return _ref.apply(this, arguments);
    };
}();

saveTest(newTest);