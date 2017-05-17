import passport from 'passport';
import passportFacebook from 'passport-facebook';
import { config } from 'dotenv';

import { User } from '../models/models';


const FacebookStrategy = passportFacebook.Strategy;

config();

const configParams = {
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRECT,
    callbackURL: 'http://localhost:8000/auth/facebook/callback',
     profileFields: ['id', 'displayName', 'emails']
};

export const FbOauth = () => {
    const strategy = new FacebookStrategy(configParams, (accessToken, refreshToken, profile, done) => {
        const options = {
            criteria: {
                'socialNetwork.facebook': profile.id
            }
        };
        User.findOne(options.criteria).exec((err, user) => {
          console.log(profile);
          if (err) {
            return done(new Error('User not found'), null);
          } else {
            if (!user) {
              user = new User({
                username: profile.username,
                name: profile.displayName,
                email: profile.emails[0].value,
                // provider: 'facebook',
                socialNetwork: [
                  {
                    facebook: profile.id
                  }
                ]
              });
              user.save(function (err) {
                if (err) console.log(err);
                return done(err, user);
              });
            } else {
              return done(err, user);
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
            return passport.authenticate('facebook');
        }
      };
};
