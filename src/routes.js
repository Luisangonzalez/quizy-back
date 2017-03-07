import { getOneTest, saveTest } from './controller/test';
import { getOneUser, saveUser } from './controller/user';
import { newTestExample, newUserExample } from './models/modelExamples';
import { JwtAuth } from './auth/jwt';
import moment from 'moment';
import { USERS } from './auth/users';
import { JWT_SECRET } from './auth/config';
import jwt from 'jwt-simple';

import bodyParser from 'body-parser';

import { User } from './models/models';

export let routes  = (app) => {
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send('Hello :)');
  });

  app.get('/user', JwtAuth().authenticate(), (req, res) => {
      res.json({ status: 'authenticate' });
      // var token = req.headers.authorization.split(" ")[1];
      // console.log('req.headers.authorization :',req.headers);
      // var payload = jwt.decode(token, 'MyS3cr3tK3Y');
      // console.log('payload --> :', payload);
      // console.log('Token --> :', token);
  });

  app.post('/token', (req, res) => {
      if (req.body.email && req.body.password) {
          let email = req.body.email;
          let password = req.body.password;
          let user = USERS.find(function(u) {
              return u.email === email && u.password === password;
          });
          if (user) {
              let payload = {
                  sub: user.id,
                  iat: moment().unix(),
                  exp: moment().add(60, 'seconds').unix()
              };
              let token = jwt.encode(payload, JWT_SECRET.jwtSecret);
              res.send({ user: user, jwtToken: token });
          } else {
              res.sendStatus(401);
          }
      } else {
          res.sendStatus(401);
      }
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

  app.get('/oneuser/', JwtAuth().authenticate(), (req, res) => {
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

  app.post('/signup/', (req, res) => {
    try {
      let newUser = new User(req.body);
      saveUser(newUser);
      res.send(newUser);
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
