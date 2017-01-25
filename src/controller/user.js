import { User } from '../models/models';
import { getOne } from './comuns';

export const getOneUser = () => {
  return getOne(User);
};

export const saveUser = async (newUserExample) => {
  try {
    newUserExample.save();
  } catch (e) {
    console.error(e);
  } finally {
    console.log('User Save async');
  }
};
