import { combineReducers } from 'redux';

import{ reducer as form } from 'redux-form';
import auth from './authReducer';
import newsletterReducer from './newsletterReducer';

const rootReducer = combineReducers({
  form,
  auth,
  newsletterReducer
});

export default rootReducer;