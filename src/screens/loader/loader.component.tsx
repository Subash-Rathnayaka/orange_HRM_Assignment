import React from 'react';
import {ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';

const Loader = (props: any) => {
  // Render a modal that displays an activity indicator when loading is true
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      hasBackdrop={true}
      backdropOpacity={0.5}
      isVisible={props.isloading}
      style={{margin: 0}}>
      {/* Display an activity indicator */}
      <ActivityIndicator size="large" color={'#e96327'} />
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  isloading: state.authReducer.isloading,
});

export default connect(mapStateToProps, null)(Loader);
