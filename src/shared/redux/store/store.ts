import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Logger from 'redux-logger';
import reducers from '../reducers';

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [], // List of reducers to persist
};

// Create a persist reducer with the persist config and the combined reducers
const persist = persistReducer(persistConfig, reducers);

// Create the Redux store with the persist reducer, initial state, and middleware
export const store = createStore(
  persist,
  {},
  applyMiddleware(ReduxThunk, Logger),
);

// Create a persistor to persist the Redux store
export const presister = persistStore(store);
