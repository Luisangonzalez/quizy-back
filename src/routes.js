import { getOneTest, saveTest } from './controller/test';
import { getOneUser, saveUser } from './controller/user';
import { newTestExample, newUserExample } from './models/modelExamples';

export let routes  = (app) => {

  app.get('/', (req, res) => {
    res.send('Hello :)');
});

  app.get('/alltest/:manolo', (req, res) => {
    // console.log('req :', req.params);
    getOneTest().then((v) => {
      res.send(v);
    });
  });

  app.get('/savetestexample/', (req, res) => {
    try {
      saveTest(newTestExample);
      res.send('Example test save');
    } catch (e) {
      res.send('No save test ', e);
    }
  });

  app.get('/oneuser/', (req, res) => {
    getOneUser().then((v) => {
      res.send(v);
    });
  });

  app.get('/saveuserexample/', (req, res) => {
    try {
      saveUser(newUserExample);
      res.send('Example test save');
    } catch (e) {
      res.send('No save test ', e);
    }
  });

};

// ES5
// module.exports = function(app) {
//   app.get('/', (req, res) => {
//     res.send('Hello !!');
//   });
// };
