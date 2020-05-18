import { combineReducers } from 'redux';
import profile from './profile';
import settings from './settings';
import users from './users';
import user from './user';

export default combineReducers({
  profile,
  settings,
  users,
  user,
});
