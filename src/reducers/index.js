import { combineReducers } from 'redux';

import{ reducer as form } from 'redux-form';

import auth from './authReducer';
import newsletterReducer from './newsletterReducer';
import requestsReducer from './requestsReducer';

const rootReducer = combineReducers({
  form,
  auth,
  newsletters,
  requests
});

export default rootReducer;