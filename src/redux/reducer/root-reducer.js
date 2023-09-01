import {combineReducers} from 'redux';
import authReducer from './auth-reducer';
import categoryReducer from './category-reducer';
const appReducer = combineReducers({
  authReducer,
  categoryReducer,
});
const rootreducer = (state, action) => {
  return appReducer(state, action);
};
export default rootreducer;
