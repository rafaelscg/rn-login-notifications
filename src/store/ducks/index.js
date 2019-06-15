import { combineReducers } from 'redux';

import login from './login';
import notifications from './notifications';
import signup from './signup';

export default combineReducers({
  login,
  notifications,
  signup,
});
