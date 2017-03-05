import passport from 'passport';
import passportJWT from 'passport-jwt';
// import moment from 'moment';

import { USERS } from './users';
import { JWT_SECRET } from './config';

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
    secretOrKey: JWT_SECRET.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

export const JwtAuth = () => {
    const strategy = new Strategy(params, (payload, done) => {
        const user = USERS[payload.sub] || null;
        if (user) {
            return done(null, {
                id: user.id
            });
        } else {
            return done(new Error('User not found'), null);
        }
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
