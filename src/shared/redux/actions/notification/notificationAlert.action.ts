import {Dispatch} from 'redux';
import {NotificationAlertColor} from '../../../enums/notificationAlertColor.enum';

// Action type constant for updating notification alert
export const NOTIFICATION_ALERT_UPDATE = 'NOTIFICATION_ALERT_UPDATE';

// Display time for the notification alert in milliseconds
const Display_Time = 4000;

// Notification alert trigger action creator
export const notificationAlertTrigger = (
  showNotificationAlert = false,
  notificationAlertText = '',
  notificationAlertColor = NotificationAlertColor.Green,
) => {
  return async (dispatch: Dispatch) => {
    // Dispatch NOTIFICATION_ALERT_UPDATE action to hide the notification alert
    dispatch({
      type: NOTIFICATION_ALERT_UPDATE,
      payload: false,
    });
    // Dispatch NOTIFICATION_ALERT_UPDATE action to show the notification alert with the provided text and color
    dispatch({
      type: NOTIFICATION_ALERT_UPDATE,
      payload: {
        showNotificationAlert,
        notificationAlertText,
        notificationAlertColor,
      },
    });
    setTimeout(() => {
      // Dispatch NOTIFICATION_ALERT_UPDATE action to hide the notification alert after the display time
      dispatch({
        type: NOTIFICATION_ALERT_UPDATE,
        payload: {
          showNotificationAlert: false,
        },
      });
      setTimeout(() => {
        // Dispatch NOTIFICATION_ALERT_UPDATE action to reset the notification alert text and color
        dispatch({
          type: NOTIFICATION_ALERT_UPDATE,
          payload: {
            notificationAlertText: '',
            notificationAlertColor: NotificationAlertColor.Green,
          },
        });
      }, 100);
    }, Display_Time);
  };
};
