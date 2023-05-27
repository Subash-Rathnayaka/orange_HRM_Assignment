import {Dispatch} from 'redux';
import {clearConfig} from '../../../api/config';

// Action type constant for logout
export const LOG_OUT = 'LOG_OUT';
// Logout action creator
export const logout = () => {
  return async (dispatch: Dispatch) => {
    // Dispatch LOG_OUT action
    dispatch({type: LOG_OUT});
    // Clear the configuration 
    clearConfig();
  };
};
