import { User } from '../models/models';
import { getOne } from './comuns';

export const getOneUser = () => {
    return getOne(User);
};

export const saveUser = async(newUserExample) => {
    try {
        newUserExample.save();
    } catch (e) {
        console.error(e);
    } finally {
        console.log('User Save async');
    }
};


export const findUser = (criteria) => {
  return new Promise(function (resolve, reject) {
    const options = {
      criteria: { username: criteria.username },
      select: 'name username email hashed_password salt'
    };
    User.findOne(options.criteria).exec((err, user) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        if (!user.authenticate(criteria.password)) {
          console.log('No auth');
        } else {
          console.log('Yes auth');
        }
        // console.log(user);
        resolve(user);
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
