import mongoose from 'mongoose';
import crypto from 'crypto';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    username: String,
    // password: String,
    hashed_password: { type: String, default: '' },
    salt: { type: String, default: '' },
    name: String,
    lastName: String,
    email: String,
    url: String,
    image: String,
    socialNetwork: [
        {
            google: String,
            facebook: String,
            twitter: String,
            email: String
        }
    ]
});


/**
 * Virtuals
 */

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

/**
 * Methods
 */

userSchema.methods = {

  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   */

  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  /**
   * Make salt
   *
   * @return {String}
   * @api public
   */

  makeSalt: function () {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String}
   * @api public
   */

  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha256', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },

  /**
   * Validation is not required if using OAuth
   */

  // skipValidation: function () {
  //   return ~oAuthTypes.indexOf(this.provider);
  // }
};

/**
 * Statics
 */

userSchema.statics = {

  /**
   * Load
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */

  load: function (options, cb) {
    options.select = options.select || 'name username';
    return this.findOne(options.criteria)
      .select(options.select)
      .exec(cb);
  }
};
