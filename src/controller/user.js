import { User } from '../models/models';
import { getOne } from './comuns';

export const getOneUser = () => {
    return getOne(User);
};

export const saveUser = async(newUser) => {
    try {
        newUser.save();
    } catch (e) {
        console.error(e);
    } finally {
        console.log('User Save async');
    }
};


export const findUser = (criteria, optionsFind) => {
  let options = {
    criteria: { email: criteria.body.email },
    select: 'name username email hashed_password salt'
  };
  if (typeof optionsFind !== 'undefined' ) {
    options = optionsFind;
  }

  return new Promise(function (resolve, reject) {
    User.findOne(options.criteria).exec((err, user) => {
      if (err) {
        reject(err);
      } else {
        if (!user) {
          reject(err);
        } else {
          if (!user.authenticate(criteria.body.password)) {
            console.log('No auth');
            reject('No auth');
          } else {
            console.log('Yes auth');
            resolve(user);
          }
        }
      }
    });
  });
};

// load: function (options, cb) {
//   options.select = options.select || 'name username';
//   return this.findOne(options.criteria)
//     .select(options.select)
//     .exec(cb);
// }
