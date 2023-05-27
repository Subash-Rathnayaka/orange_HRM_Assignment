import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {NotificationAlertColor} from '../../shared/enums/notificationAlertColor.enum';
import styles from './notificationAlert.styles';

// Destructuring styles from the styles object
const {container, checkIconStyle, mainView, bgColorGreen, bgColorOrange, text} = styles;

const NotificationAlert = (props: any) => {
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0}
      isVisible={props.showNotificationAlert}>
      {/* SafeAreaView for a safe area on the screen */}
      <SafeAreaView style={[mainView]}>
        {/* View for the notification alert container */}
        <View
          style={[
            container,
            props.notificationAlertColor === NotificationAlertColor.Green
              ? bgColorGreen
              : bgColorOrange,
          ]}>
          {/* Text displaying the notification alert message */}
          <Text
            style={[text]}>
            {props.notificationAlertText}
          </Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
    // Map Redux state to props
    showNotificationAlert: state.notificationAlertReducer.showNotificationAlert,
    notificationAlertText:
    state.notificationAlertReducer.notificationAlertText ?? '',
    notificationAlertColor:
    state.notificationAlertReducer.notificationAlertColor ??
    NotificationAlertColor.Green,
});

export default connect(mapStateToProps, null)(NotificationAlert);
