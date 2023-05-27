import {NotificationAlertColor} from '../../../../shared/enums/notificationAlertColor.enum';
import {notificationAlertTrigger} from '../../../../shared/redux/actions';
import {store} from '../../../../shared/redux/store/store';
import {FEEDBACK_SIGNIN} from './feedback.const';

export const loginValidation = (userName: string, password: string) => {
  if (!isValidUserName(userName)) {
    store.dispatch<any>(
      notificationAlertTrigger(
        true,
        FEEDBACK_SIGNIN.emptyUserName.body,
        NotificationAlertColor.Red,
      ),
    );
  } else if (!(password.length > 0)) {
    store.dispatch<any>(
      notificationAlertTrigger(
        true,
        FEEDBACK_SIGNIN.emptyPassword.body,
        NotificationAlertColor.Red,
      ),
    );
  } else {
    return userName && password;
  }
  return false;
};

const isValidUserName = (userName: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;
  return usernameRegex.test(userName);
};
