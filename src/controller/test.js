import { Test } from '../models/models';
import { getOne } from './comuns';

export const getOneTest = () => {
  return getOne(Test);
};


// Co
// let getOne = co.wrap(function* (model) {
//   console.log('getONe');
//   let m;
//   try {
//     m = yield model.find().exec();
//   } catch (e) {
//     console.error(e);
//   }
//   console.log(m);
//   return m;
// });

// basic ES5

// let query = Test.find();
// query.exec((err, test) => {
//   if (err) {
//     res.send(err);
//   } else {
//     res.json(test);
//   }
// });

// ES7 async

export const saveTest = async (newTest) => {
  try {
    newTest.save();
  } catch (e) {
    console.error(e);
  } finally {
    console.log('Test Save async');
  }
};


// connect();

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
