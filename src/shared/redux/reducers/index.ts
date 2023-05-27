import {combineReducers} from 'redux';
import notificationAlertReducer from './notification/notificationAlert.reducer';
import authReducer from './auth/auth.reducer';

// Combine multiple reducers into a single root reducer
export default combineReducers({
  notificationAlertReducer: notificationAlertReducer,
  authReducer: authReducer,
});
