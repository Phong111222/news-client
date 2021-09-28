import { combineReducers } from 'redux';
import AuthReducer from './Auth/reducer';

const reducer = combineReducers({
  auth: AuthReducer,
});

export default reducer;
