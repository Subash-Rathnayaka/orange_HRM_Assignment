import {Dispatch} from 'redux';
import {notificationAlertTrigger} from '../notification/notificationAlert.action';
import {NotificationAlertColor} from '../../../enums/notificationAlertColor.enum';
import {profileService} from '../../services/auth/profile.service';
import {loaderTrigger} from '../loader/loader.action';

// Action type constant for profile success
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';

// Profile action creator
export const profile = (id: string) => async (dispatch: Dispatch) => {
  dispatch<any>(loaderTrigger(true));
  try {
    // Call the profile service to fetch the profile data
    const response = await profileService(id);
    dispatch<any>(loaderTrigger(false));
    if (response.data) {
      // Dispatch PROFILE_SUCCESS action with the profile data payload
      dispatch({type: PROFILE_SUCCESS, payload: response});
      setTimeout(() => {
        // Trigger a success notification alert with a green color
        dispatch<any>(
          notificationAlertTrigger(
            true,
            `PROFILE LOAD SUCCESS.`,
            NotificationAlertColor.Green,
          ),
        );
      }, 500);
      return;
    } else {
      setTimeout(() => {
        // Trigger a failure notification alert with a red color and the error message
        dispatch<any>(
          notificationAlertTrigger(
            true,
            `PROFILE FAILURE:  ${response.message}`,
            NotificationAlertColor.Red,
          ),
        );
      }, 500);
      return;
    }
  } catch (error) {
    dispatch<any>(loaderTrigger(false));
    setTimeout(() => {
      // Trigger a failure notification alert with a red color and the error message
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
