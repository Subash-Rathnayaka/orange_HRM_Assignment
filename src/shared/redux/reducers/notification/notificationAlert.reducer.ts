import {PURGE, REHYDRATE, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {NOTIFICATION_ALERT_UPDATE} from '../../actions';
import {NotificationAlertColor} from '../../../enums/notificationAlertColor.enum';

// Initial state of the reducer
const initialState = {
  showNotificationAlert: false,
  notificationAlertText: '',
  notificationAlertColor: NotificationAlertColor.Green,
};

// Configuration for persisting the reducer state
const persistConfig = {
  key: 'notificationAlertStore',  // Key used to store the state in AsyncStorage
  storage: AsyncStorage,  // AsyncStorage as the storage engine
  blacklist: [],  // AsyncStorage as the storage engine
};

// Reducer function for handling state updates
const notificationAlertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
      };
    case NOTIFICATION_ALERT_UPDATE:
      return {
        ...state,
        showNotificationAlert:
          action.payload.showNotificationAlert ?? state.showNotificationAlert,
        notificationAlertText:
          action.payload.notificationAlertText ?? state.notificationAlertText,
        notificationAlertColor:
          action.payload.notificationAlertColor ?? state.notificationAlertColor,
      };
    case PURGE: // Reset the state when purging the store
    default:
      return state;
  }
};

// Create a persisted reducer by wrapping the notificationAlertReducer with persistReducer
export default persistReducer(persistConfig, notificationAlertReducer);
