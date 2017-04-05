import { getOneTest, saveTest } from './controller/test';
import { getOneUser, saveUser, findUser } from './controller/user';
import { newTestExample, newUserExample } from './models/modelExamples';
import { JwtAuth } from './auth/jwt';
import moment from 'moment';
import { JWT_SECRET } from './auth/config';
import jwt from 'jwt-simple';

import { User } from './models/models';

import bodyParser from 'body-parser';
import cors from 'cors';
// .env files
import { config } from 'dotenv';
config();
process.env.FRONTEND_URI_PROD ? process.env.FRONTEND_URI = process.env.FRONTEND_URI_PROD : process.env.FRONTEND_URI;
let whitelist = [process.env.FRONTEND_URI];
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

export let routes  = (app) => {
  app.use(bodyParser.json());
  app.use(cors(corsOptions));

  app.get('/', (req, res) => {
    res.send('Hello :)');
  });

  app.get('/user', JwtAuth().authenticate(), (req, res) => {
      res.json({ status: 'authenticate' });
  });

  app.post('/token', (req, res) => {
      if (req.body.email && req.body.password) {
          findUser(req).then((user) => {
            let payload = {
              sub: user._id,
              iat: moment().unix(),
              exp: moment().add(60, 'seconds').unix()
            };
            let token = jwt.encode(payload, JWT_SECRET.jwtSecret);
            res.send({ user: user.username, jwtToken: token });
          }).catch(() => {
            console.log('No user');
            res.sendStatus(401);
          });
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

  app.post('/finduser', (req, res) => {
    try {
      findUser(req.body);
      res.send('User fi');
    } catch (e) {
        console.error(e);
    }
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
      let payload = {
        sub: newUser._id,
        iat: moment().unix(),
        exp: moment().add(60, 'seconds').unix()
      };
      let token = jwt.encode(payload, JWT_SECRET.jwtSecret);
      res.send({ user: newUser.username, jwtToken: token });
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
