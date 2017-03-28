import passport from 'passport';
import passportJWT from 'passport-jwt';
import { User } from '../models/models';
import { JWT_SECRET } from './config';

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
    secretOrKey: JWT_SECRET.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

export const JwtAuth = () => {
    const strategy = new Strategy(params, (payload, done) => {
        let options = {
          criteria: { _id: payload.sub },
          select: 'name username email hashed_password salt'
        };
        User.findOne(options.criteria).exec((err, user) => {
          if (err) {
            return done(new Error('User not found'), null);
          } else {
            if (!user) {
              return done(new Error('User not found'), null);
            } else {
              return done(null, {
                  id: user.id
              });
            }
          }
        });
    });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwt', JWT_SECRET.jwtSession);
        }
    };
};
