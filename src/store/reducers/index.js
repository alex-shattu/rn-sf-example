import { combineReducers } from 'redux';
import myProfile from './myProfile';
import settings from './settings';

export default combineReducers({
  myProfile,
  settings,
});
