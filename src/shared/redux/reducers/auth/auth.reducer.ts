import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {FETCH_TOKEN_SUCCESS} from '../../actions/auth/token.action';
import {LOGIN_SUCCESS} from '../../actions/auth/login.action';
import {LOG_OUT} from '../../actions/auth/logOut.action';
import {PROFILE_SUCCESS} from '../../actions/auth/profile.action';
import {UPDATE_LOADER} from '../../actions/loader/loader.action';

// Initial state of the reducer
const initialState = {
  token: null,
  user: null,
  userProfile: null,
  isloading: false,
};

// Configuration for persisting the reducer state
const persistConfig = {
  key: 'authStore',
  storage: AsyncStorage,
  blacklist: [],
};

// Reducer function for handling state updates
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TOKEN_SUCCESS:
      return {...state, isloading: false, token: action.payload};
    case UPDATE_LOADER:
      return {...state, isloading: action.payload};
    case LOGIN_SUCCESS:
      return {...state, isloading: false, user: action.payload};
    case PROFILE_SUCCESS:
      return {...state, isloading: false, userProfile: action.payload};
    case LOG_OUT:
      return {
       // Reset the state to the initial state when logout
        ...initialState, 
      };
    default:
      return state;
  }
};

// Create a persisted reducer by wrapping the authReducer with persistReducer
export default persistReducer(persistConfig, authReducer);
