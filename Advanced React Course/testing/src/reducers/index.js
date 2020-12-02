import { combineReducers } from 'redux';
import authReducer from 'reducers/Auth';
import commentsReducer from 'reducers/Comments';

export default combineReducers({
  auth: authReducer,
  comments: commentsReducer,
});
