import {Dispatch} from 'redux';
import {loginUserService} from '../../services/auth/login.service';
import {notificationAlertTrigger} from '../notification/notificationAlert.action';
import {NotificationAlertColor} from '../../../enums/notificationAlertColor.enum';
import {loaderTrigger} from '../loader/loader.action';

// Action type constant for login success
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Login action creator
export const login =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    // Dispatch loader trigger to show loading spinner
    dispatch<any>(loaderTrigger(true));

    try {
      // Call the login service to authenticate the user
      const response = await loginUserService(username, password);  
      // Dispatch loader trigger to hide loading spinner
      dispatch<any>(loaderTrigger(false));
      if (response.login) {
        // If login is successful, dispatch LOGIN_SUCCESS action with the response data
        dispatch({type: LOGIN_SUCCESS, payload: response});
        // Show a success notification alert after a delay
        setTimeout(() => {
          dispatch<any>(
            notificationAlertTrigger(
              true,
              `LOGIN SUCCESS.`,
              NotificationAlertColor.Green,
            ),
          );
        }, 500);
        return;
      } else {
        // If login fails, show a failure notification alert with the error message
        setTimeout(() => {
          dispatch<any>(
            notificationAlertTrigger(
              true,
              `LOGIN FAILURE:  ${response.message}`,
              NotificationAlertColor.Red,
            ),
          );
        }, 500);
        return;
      }
    } catch (error) {
      // If an error occurs during login, show a failure notification alert with the error message
      dispatch<any>(loaderTrigger(false));
      setTimeout(() => {
        dispatch<any>(
          notificationAlertTrigger(
            true,
            `LOGIN FAILURE. ${error}`,
            NotificationAlertColor.Red,
          ),
        );
      }, 500);
      return;
    }
  };
